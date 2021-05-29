import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskComponent } from './components/task/task.component';
import { TaskitemComponent } from './components/taskitem/taskitem.component';
import { AboutComponent } from './components/about/about.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'', component: TaskComponent},
  {path:'about', component: AboutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskComponent,
    TaskitemComponent,
    AboutComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
