import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {


  columns!:any[];
    @Input() data!:any;
  
    constructor() {}
  
    ngOnInit(): void {
      this.columns = [
        { header: 'Flag', field: 'flag' },
        { header: 'Name', field: 'name' },
        { header: 'Population', field: 'population' },
        { header: 'Area(km)', field: 'area' },
        { header: 'Region', field: 'region' }
      ];
    }
}
