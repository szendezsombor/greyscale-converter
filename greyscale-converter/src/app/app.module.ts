import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageGreyComponent } from './image-grey/image-grey.component';
import { ImageGreyPrewiewContainerComponent } from './image-grey-prewiew-container/image-grey-prewiew-container.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';






@NgModule({
  declarations: [
    AppComponent,
    ImageGreyComponent,
    ImageGreyPrewiewContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
