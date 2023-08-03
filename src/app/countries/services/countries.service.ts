import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {

  }

  searchCountryByAlphaCode(term: string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${ term }`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${ term }`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchRegion(term: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${ term }`)
      .pipe(
        catchError(error => of([]))
      );
  }


}
