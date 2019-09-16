import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Angular material*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Service*/
import { MovieService } from './service/movie.service';
import { ListTeacherService } from './service/list-teacher.service';
import { AsignaturasService } from './service/component-angular.service';
/*Componentes */
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { MyComponentModule } from './component-material';
import { AsignaturaComponent } from './component-angular/component-angular.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ListTeacherComponent,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService,ListTeacherService,AsignaturasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
