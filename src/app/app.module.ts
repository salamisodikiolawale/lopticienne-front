//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shares/components/header/header.component';
import { FooterComponent } from './shares/components/footer/footer.component';
import { BanniereComponent } from './shares/components/banniere/banniere.component';
import { CardComponent } from './shares/components/card/card.component';
import { ButtonComponent } from './shares/components/button/button.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { LentillesComponent } from './lentilles/lentilles.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { ArccueilComponent } from './arccueil/arccueil.component';
import { MakeComponent } from './make/make.component';
import { MakeCardComponent } from './shares/components/make-card/make-card.component';

//Materials
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//Pipes
import { SearchPipe } from './shares/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

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
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
