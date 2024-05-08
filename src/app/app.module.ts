import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StudentService } from './Services/student.service';
import { PercentagePipe } from './Pipes/percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PercentagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
