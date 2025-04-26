import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {

  }

}
