import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  deleteAllData(): void{
    localStorage.clear();
  }

  getData(item: string): any {
    return JSON.parse(localStorage.getItem(item) || '{}');
  }

  setData(item: string, values: any): void {
    localStorage.setItem(item, JSON.stringify(values));
  }

  deleteData(item: string): void {
    localStorage.removeItem(item);
  }
}
