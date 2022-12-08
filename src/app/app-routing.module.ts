import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
