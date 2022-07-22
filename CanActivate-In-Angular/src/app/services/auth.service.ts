import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private localstorage: LocalStorageService) {}

  logout() {
    this.localstorage.deleteAllData();
  }
  isUserLoggedIn() {
    if (!this.localstorage.getData('IsLoggedIn')) {
      return false;
    }
    return true;
  }
}
