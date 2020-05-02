import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public yugiohDatabase: any = [];

  constructor(private http: HttpClient) {}

  filterYugiohDatabase(searchTerm) {
    return this.yugiohDatabase.filter(item => {
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getAll() {
    // return this.http.get('app/data/cards.json').pipe(new Map((res: Response) => res.json()));
  }
}

export class Card {
  Icon: string;
  Name: string;
  Rarity: string;
  Edition: string;
  Pack: string;
  Owned: number;
  OPrice: number;
  PPrice: number;
  CPrice: number;
  Projection: number;
  URL: string;
  Change: number;
  Location: string;

  constructor(obj?: any) {
    this.Icon = obj && obj.Icon || null;
    this.Name = obj && obj.Name || null;
    this.Rarity = obj && obj.Rarity || null;
    this.Edition = obj && obj.Edition || null;
    this.Pack = obj && obj.Pack || null;
    this.Owned = obj && obj.Owned || null;
    this.OPrice = obj && obj.OPrice || null;
    this.PPrice = obj && obj.PPrice || null;
    this.CPrice = obj && obj.CPrice || null;
    this.Projection = obj && obj.Projection || null;
    this.URL = obj && obj.URL || null;
    this.Change = obj && obj.Change || null;
    this.Location = obj && obj.Location || null;
  }
}