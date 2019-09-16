import { Component } from '@angular/core';
import { Asignaturas } from '../dto/datos-component';
import { AsignaturasService } from '../service/component-angular.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-component-angular',
  templateUrl: './component-angular.component.html',
  styleUrls: ['./component-angular.component.scss']
})

export class AsignaturaComponent {
  myControl = new FormControl();
  /*displayedColumns: string[] = ['name_asignatura'];*/
  asignatura: Asignaturas[];

  constructor(    public listadoAsigService: AsignaturasService) { 
    this.asignatura = this.listadoAsigService.getAsignaturas();
  }

/*
  export class AutocompleteSimpleExample {
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
*/  

  ngOnInit() {
  }

}
