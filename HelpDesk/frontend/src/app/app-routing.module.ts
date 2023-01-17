import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';

import { HomeComponent } from './components/home/home.component';
import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', component: LoginComponent
  },
  { 
    path: 'signup', component: SignupComponent 
  },
  {
    path: '*', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

      { path: 'tecnicos', component: TecnicoListComponent, canActivate: [AuthGuard] },
      { path: 'tecnicos/create', component: TecnicoCreateComponent, canActivate: [AuthGuard] },
      { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent, canActivate: [AuthGuard] },
      { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent, canActivate: [AuthGuard] },

      { path: 'clientes', component: ClienteListComponent, canActivate: [AuthGuard] },
      { path: 'clientes/create', component: ClienteCreateComponent, canActivate: [AuthGuard] },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent, canActivate: [AuthGuard] },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent, canActivate: [AuthGuard] },
      
      { path: 'chamados', component: ChamadoListComponent, canActivate: [AuthGuard] },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
