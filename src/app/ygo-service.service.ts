import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { YgoCard } from '../app/ygo-card'; 
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

//=====================================================
//----------- Example code --------------------------
@Injectable()  
export class YgoServiceService {  

  public yugiohDatabase: any = [];
  
  constructor(private http: HttpClient) { }  
  
  saveCard(card){      
    return this.http.post('http://localhost:27017/api/SaveCard/', card)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetCard(){       
    return this.http.get('http://localhost:27017/api/getCard/')  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:27017/api/deleteCard/',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
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
//-------------------------------------------------------
//=========================================================

// @Injectable()
// export class YgoServiceService {
  
//   // private ygoCardsUrl: 'http://localhost:8080/api/ygocards';
//   // public yugiohDatabase: any = [];

//   // private httpOptions = {
//   //   headers: new HttpHeaders({
//   //     "content-Type": "application/json"
//   //   })
//   // };

//   // constructor(private http: HttpClient) {
//   //  }

//   //  public findAll(): Observable<YgoCard[]> {
//   //    return this.http.get<YgoCard[]>(this.ygoCardsUrl)
//   //     .pipe(catchError(this.handleError));
//   //  }

//   //  save(ygoCard: YgoCard) {
//   //    return this.http.post<YgoCard>(this.ygoCardsUrl, ygoCard);
//   //  }

//   //  public handleError(error: HttpErrorResponse) {
//   //    if (error.error instanceof ErrorEvent) {
//   //      console.error("An error occurred:", error.error.message);
//   //    }
//   //    else {
//   //      console.error("API error occured:", error.status, error.error);
//   //    }
//   //    return throwError(error.status);
//   //  }

  
// }
