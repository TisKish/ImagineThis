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
    private ygoService: YgoServiceService) {       
    this.ygoCard = new YgoCard();
  }

  onSubmit() {
    this.ygoService.save(this.ygoCard).subscribe(result => this.gotoYgoList());
  }

  gotoYgoList() {
    this.router.navigate(['/ygocards']);
  }

  ngOnInit() {}

}
