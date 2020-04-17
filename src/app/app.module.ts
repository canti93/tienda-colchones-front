import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ColchonComponent } from './colchon/colchon.component';
import { SomierComponent } from './somier/somier.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const appRoutes: Routes = [
  {path: 'colchon', component: ColchonComponent},
  {path: 'somier', component: SomierComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColchonComponent,
    SomierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
