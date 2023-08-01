import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[]=[];
  constructor(private countriesService:CountriesService) {

  }

  searchByCapital(term: string):void{
    console.log("Desde ByCapitalPage");
    console.log({term});
    this.countriesService.searchCapital(term).subscribe( countries => {
      this.countries=countries;
    })

  }

}
