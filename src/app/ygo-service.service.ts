import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { YgoCard } from '../app/ygo-card'; 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do'; 

@Injectable()
export class YgoServiceService {
  
  // private ygoCardsUrl: 'http://localhost:8080/api/ygocards';
  // public yugiohDatabase: any = [];

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     "content-Type": "application/json"
  //   })
  // };

  constructor(private http: HttpClient) {
   }

   public findAll(): Observable<YgoCard[]> {
     return this.http.get<YgoCard[]>(this.ygoCardsUrl)
      .pipe(catchError(this.handleError));
   }

   public save(ygoCard: YgoCard) {
     return this.http.post<YgoCard>(this.ygoCardsUrl, ygoCard);
   }

   public handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
       console.error("An error occurred:", error.error.message);
     }
     else {
       console.error("API error occured:", error.status, error.error);
     }
     return throwError(error.status);
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
