import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckApiService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}
    
  getJoke(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  } 
}
