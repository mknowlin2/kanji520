import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { HomeComponent } from './home/home.component';

import { HeaderLinkService } from './header/header-link.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    CardDeckComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
//    NgbModule.forRoot()
  ],
  providers: [HeaderLinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
