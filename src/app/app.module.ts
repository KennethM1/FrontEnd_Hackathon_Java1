import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from './backend.service';
import { CreatecharComponent } from './createchar/createchar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomepageComponent,
    NavbarComponent,
    CreatecharComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
