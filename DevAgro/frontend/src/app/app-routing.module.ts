import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { FazendaCrudComponent } from './views/fazenda-crud/fazenda-crud.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import { GraoCrudComponent } from './views/grao-crud/grao-crud.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthGuard } from './views/login-view/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: 'singup',
    component: EmpresaCreateComponent,
  },
  {
    path: 'funcionario',
    component: FuncionarioCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'funcionario/read',
    component: FuncionarioReadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'funcionario/create',
    component: FuncionarioCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'funcionario/update/:id',
    component: FuncionarioUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'funcionario/delete/:id',
    component: FuncionarioDeleteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fazenda',
    component: FazendaCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fazenda/create',
    component: FazendaCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fazenda/update/:id',
    component: FazendaUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'fazenda/delete/:id',
    component: FazendaDeleteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grao',
    component: GraoCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grao/create',
    component: GraoCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grao/update/:id',
    component: GraoUpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'grao/delete/:id',
    component: GraoDeleteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'empresa/create',
    component: EmpresaCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
