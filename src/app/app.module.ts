import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { BanniereComponent } from './shares/components/banniere/banniere.component';
import { CardComponent } from './shares/components/card/card.component';
import { ButtonComponent } from './shares/components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { LentillesComponent } from './lentilles/lentilles.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { ArccueilComponent } from './arccueil/arccueil.component';
import { MakeComponent } from './make/make.component';
import { MakeCardComponent } from './shares/components/make-card/make-card.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BanniereComponent,
    ArccueilComponent,
    CardComponent,
    ButtonComponent,
    MenuLeftComponent,
    LentillesComponent,
    LunettesComponent,
    MakeComponent,
    MakeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
