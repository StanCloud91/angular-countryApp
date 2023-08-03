import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[]=[];
  constructor(private countriesService:CountriesService) {

  }

  searchByCapital(term: string):void{
    console.log("Desde ByCapitalPage");
    console.log({term});
    this.countriesService.searchCountry(term).subscribe( countries => {
      this.countries=countries;
    })

  }

}
