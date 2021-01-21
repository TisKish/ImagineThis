import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YgoServiceService } from '../ygo-service.service';
import { YgoCard } from '../ygo-card';

@Component({
  selector: 'app-ygo-card-form',
  templateUrl: './ygo-card-form.component.html',
  styleUrls: ['./ygo-card-form.component.scss'],
})
export class YgoCardFormComponent implements OnInit {

  ygoCard: YgoCard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: YgoServiceService) {   
  }
  Repdata;  
  valbutton ="Save";  

  onSave = function(card,isValid: boolean) {    
    card.mode= this.valbutton;  
     this.dataService.saveCard(card)  
     .subscribe(data =>  {  alert(data.data);  
          
       this.ngOnInit();    
     }   
     , error => this.errorMessage = error )  
       
   }

  gotoYgoList() {
    this.router.navigate(['/ygocards']);
  }

  ngOnInit() {
    this.dataService.GetCard().subscribe(data =>  this.Repdata = data)
  }

}
