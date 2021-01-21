import { Component, OnInit } from "@angular/core";
import { YgoCard } from "../ygo-card";
import { Router } from "@angular/router";
import { YgoServiceService } from "../ygo-service.service";
import { FormControl, FormGroup, Validators, FormsModule } from "@angular/forms";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: "app-yugioh",
  templateUrl: "yugioh.page.html",
  styleUrls: ["yugioh.page.scss"]
})
export class YugiohPage implements OnInit {
  private selectedItem: any;
  ygoCards: any;
  currentSort: any;
  public searchTerm: string = "";
  public yugiohDatabase: YgoCard[];
  searching: any = false;
  searchControl: FormControl;

  constructor(private router: Router, private dataService: YgoServiceService) {
    // for (let i = 0; i < this.thisCard.length+1; i++) {
    //   this.thisCard.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  Repdata;
  valbutton = "Save";

  ngOnInit() {
    this.dataService.GetCard().subscribe(data => this.Repdata = data)
    console.log("Sucessfully loaded dataService:" + this.dataService);
    this.currentSort = "";
    this.setFilteredItems();
    this.changeProjections(this.yugiohDatabase);
    this.changePercent(this.yugiohDatabase);
    this.checkLocation(this.yugiohDatabase);
  }

  onSave = function(card,isValid: boolean) {    
    card.mode= this.valbutton;  
     this.dataService.saveCard(card)  
     .subscribe(data =>  {  alert(data.data);  
          
       this.ngOnInit();    
     }   
     , error => this.errorMessage = error )  
       
   }     

   edit = function(detail) {  
    this.ID = detail._id;  
    this.Name = detail.Name;  
    this.Icon = detail.Icon;
    this.Detail = detail.Detail;
    this.Rarity = detail.Rarity; 
    this.Edition = detail.Edition;
    this.Pack = detail.Pack;
    this.Owned = detail.Owned;
    this.OPrice = detail.OPrice;
    this.PPrice = detail.PPrice;   
    this.CPrice = detail.CPrice;
    this.Projection = detail.Projection;
    this.URL = detail.URL;
    this.Change = detail.Change;
    this.Location = detail.Location;          
    this.valbutton ="Update";  
    }  

    delete = function(id) {  
      this.dataService.deleteCard(id)  
      .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
      }  

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/Yugioh', JSON.stringify(item)]);
  // }

  changeProjections(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].PPrice < list[index].OPrice) {
        list[index].Projection = list[index].CPrice - list[index].PPrice;
      } else {
        list[index].Projection = list[index].CPrice - list[index].OPrice;
      }
    }
  }

  setFilteredItems() {
    this.yugiohDatabase = this.dataService.filterYugiohDatabase(
      this.searchTerm
    );
  }

  //   ionViewDidLoad() {

  //     this.setFilteredItems();

  //     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

  //         this.searching = false;
  //         this.setFilteredItems();

  //     });

  // }

  onSearchInput() {
    this.searching = true;
  }

  fullUpdate() {
    
 
  }

  changePercent(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].OPrice < list[index].CPrice) {
        list[index].Change = list[index].Projection / list[index].CPrice;
      } else {
        list[index].Change = list[index].Projection / list[index].CPrice;
      }
    }
  }

  dynamicSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchId");
    filter = input.value.toUpperCase();
    table = document.getElementById("binderList");
    tr = table.getElementsByTagName("tr")[1];
    alert(table.length);
    // alert(tr.getElementsByTagName('td')[0].var)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr.getElementsByTagName("td")[0];
      alert("td is " + td);
      if (td) {
        alert("td is " + td);
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          alert("td is " + td);
          tr[i].style.display = "none";
        }
      }
    }
  }

  checkLocation(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].CPrice >= 5) {
        list[index].Location = "Binder";
      } else if (1.5 < list[index].CPrice && list[index].CPrice < 5) {
        list[index].Location = "Bait";
      }
    }
  }

  checkSite() {
    alert("This works");
    this.router.navigate(["https://yugiohprices.com/"]);
  }

  GetSortOrderAsc(prop) {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  GetSortOrderDesc(prop) {
    return function(a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  nameSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("Name"))
    );
  }


  nameSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("Name"))
    );
  }

  priceSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("CPrice"))
    );
  }

  priceSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("CPrice"))
    );
  }

  changeSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("Change"))
    );
  }

  changeSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("Change"))
    );
  }
}
