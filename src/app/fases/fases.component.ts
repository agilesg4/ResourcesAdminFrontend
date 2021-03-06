import { Component, OnInit } from '@angular/core';

import { Fases } from './fases';
import { FasesService } from '../core/services/fases.service';

@Component({
  selector: 'app-fases',
  templateUrl: './fases.component.html',
  styleUrls: ['./fases.component.css']
})
export class FasesComponent implements OnInit {

  constructor(private fasesService: FasesService) { }
  fases: Fases[];
  selected: any;
  ngOnInit() {
    this.getListFases();
  }

  getResources(): void {
      alert(this.selected);
  }


  getListFases(): void {
    this.fasesService.getAllPhases().subscribe((fases: any) => this.fases = fases.results);
  }
}
