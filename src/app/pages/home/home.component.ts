import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../core/components/hero-section/hero-section.component';
import { TableFilterComponent } from '../../core/components/table-filter/table-filter.component';
import { DataTableComponent } from "../../core/components/data-table/data-table.component";
import { CountriesService } from '../../core/services/countries.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, TableFilterComponent, DataTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit  {

  countries!: any[];

  private countriesService = inject(CountriesService);
  constructor(){

  }

  ngOnInit(): void {
    this.getCountriesService();
  }

  getCountriesService(){
    this.countriesService.getAllCountries().subscribe((res) => {
      if(res){
        this.countries = res;
      }
    });
  }
}
