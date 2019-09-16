import { Component} from '@angular/core';
import { Teacher } from '../dto/teacher';
import { ListTeacherService } from '../service/list-teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent {
  displayedColumns: string[] = ['name', 'licenciatura', 'ciudad','tipologia'];
  teacher: Teacher[];

  constructor(
    
    private listaTeacherService: ListTeacherService) { 
    this.teacher = this.listaTeacherService.getTeacher();
  }

  ngOnInit() {
  }

}
