import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YgoCard } from '../app/ygo-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YgoServiceService {
  
  private ygoCardsUrl: string;
  public yugiohDatabase: any = [];

  constructor(private http: HttpClient) {
    this.ygoCardsUrl = 'http://localhost:8080/ygocards';
   }

   public findAll(): Observable<YgoCard[]> {
     return this.http.get<YgoCard[]>(this.ygoCardsUrl);
   }

   public save(ygoCard: YgoCard) {
     return this.http.post<YgoCard>(this.ygoCardsUrl, ygoCard);
   }

   filterYugiohDatabase(searchTerm) {
    return this.yugiohDatabase.filter(item => {
      if (item.Detail.toLowerCase().indexOf(searchTerm.toLowerCase())) {
        return item.Name.toLowerCase();
      }
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
