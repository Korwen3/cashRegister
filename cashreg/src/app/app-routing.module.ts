import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsommableCreateComponent } from './consommable-create/consommable-create.component';
import { ConsommableListComponent } from './consommable-list/consommable-list.component';
import { ConsommableEditComponent } from './consommable-edit/consommable-edit.component';
import { PanierComponent } from './panier/panier.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'panier' },
  { path: 'create-consommable', component: ConsommableCreateComponent },
  { path: 'edit-consommable/:id', component: ConsommableEditComponent },
  { path: 'consommables-list', component: ConsommableListComponent },
  { path: 'panier', component: PanierComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
