import { Component, OnInit } from '@angular/core';
import { Card } from './card-database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yugioh',
  templateUrl: 'yugioh.page.html',
  styleUrls: ['yugioh.page.scss']
})


export class YugiohPage implements OnInit {
  private selectedItem: any;
  thisCard = Card;
  currentSort: any;

  constructor(private router: Router) {
    // for (let i = 0; i < this.thisCard.length+1; i++) {
    //   this.thisCard.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  ngOnInit() {
    
    this.currentSort = "";
    this.changeProjections(this.thisCard);
    this.changePercent(this.thisCard);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/Yugioh', JSON.stringify(item)]);
  // }


  changeProjections(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].PPrice < list[index].CPrice) {
        list[index].Projection = list[index].CPrice - list[index].PPrice;
      }
      else {
        list[index].Projection = list[index].CPrice - list[index].OPrice;
      }
    }
  };

  changePercent(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].OPrice < list[index].CPrice) {
        list[index].Change = list[index].Projection / list[index].CPrice;
      }
      else {
        list[index].Change = list[index].Projection / list[index].CPrice;
      }
    }
  };

  changePrices(list) {
    for (let index = 0; index < list.length + 1; index++) {
        list[index].CPrice = list[index].CPrice.map(Number);
      
    }
  };

  checkSite() {
    alert("This works");
    this.router.navigate(['https://yugiohprices.com/']);
  }

  GetSortOrderAsc(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  GetSortOrderDesc(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  nameSortAsc() {
    this.currentSort = this.GetSortOrderAsc(Card.sort(this.GetSortOrderAsc("Name")));
  }

  nameSortDesc() {
    this.currentSort = this.GetSortOrderDesc(Card.sort(this.GetSortOrderDesc("Name")));
  }

  priceSortAsc() {
    this.currentSort = this.GetSortOrderAsc(Card.sort(this.GetSortOrderAsc("CPrice")));
  }

  priceSortDesc() {
    this.currentSort = this.GetSortOrderDesc(Card.sort(this.GetSortOrderDesc("CPrice")));
  }

  changeSortAsc() {
    this.currentSort = this.GetSortOrderAsc(Card.sort(this.GetSortOrderAsc("Change")));

  }

  changeSortDesc() {
    this.currentSort = this.GetSortOrderDesc(Card.sort(this.GetSortOrderDesc("Change")));
  }

}
