import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {

  }

  searchCapital(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
      .pipe(
        catchError(error => of([]))
      );
  }


}
