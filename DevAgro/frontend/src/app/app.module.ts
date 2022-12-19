import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';

import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';

import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';
import { MatSelectModule } from '@angular/material/select';

import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';

import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FazendaCrudComponent } from './views/fazenda-crud/fazenda-crud.component';

import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { GraoCrudComponent } from './views/grao-crud/grao-crud.component';
import { HomeComponent } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeViewComponent } from './views/home-view/home-view.component';

import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    FazendaCreateComponent,
    FazendaReadComponent,
    FazendaUpdateComponent,
    FazendaDeleteComponent,
    GraoCreateComponent,
    GraoUpdateComponent,
    GraoDeleteComponent,
    GraoReadComponent,
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
    EmpresaDeleteComponent,
    LoginViewComponent,
    EmpresaDeleteComponent,
    HeaderComponent,
    FazendaCrudComponent,
    FuncionarioCrudComponent,
    NotFoundComponent,
    GraoCrudComponent,
    HomeComponent,
    HomeViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    InputTextModule,
    TableModule,
    DropdownModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
