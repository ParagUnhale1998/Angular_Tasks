import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipiApiService {
  private url: string = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) {}
  getRecipi(name: string) {
    return this.http.get(this.url + name);
  }
}
