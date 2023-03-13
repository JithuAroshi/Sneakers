import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environment/environment';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllPostComponent } from './all-post/all-post.component';
import { NewPostComponent } from './new-post/new-post.component';

import { AngularEditorModule } from '@kolkov/angular-editor'
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryComponent,
    FooterBarComponent,
    NavBarComponent,
    AllPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularEditorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
