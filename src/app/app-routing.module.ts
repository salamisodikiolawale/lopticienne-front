import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArccueilComponent } from './arccueil/arccueil.component';
import { LentillesComponent } from './lentilles/lentilles.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { MakeComponent } from './make/make.component';



const routes: Routes = [
  {path:'', component: ArccueilComponent},
  {path:'lunettes', component: LunettesComponent},
  {path:'lentilles', component: LentillesComponent},
  {path:'make', component: MakeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
