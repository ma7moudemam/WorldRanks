import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country } from '../../shared/models/Country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1/all?sort=population';

  private http = inject(HttpClient);
  constructor() { 

  }


  getAllCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((countries) => countries.map(country => ({
        flag: country.flags?.png || '', // Using the flag image URL
        name: country.name?.common || 'Unknown',
        population: country.population || 0,
        area: country.area || 0,
        region: country.region || 'Unknown'
      })))
    );
  }


}
