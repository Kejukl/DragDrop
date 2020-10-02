import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GojsDiagramComponent } from './gojs-diagram/gojs-diagram.component';
import { InspectorComponent } from './inspector/inspector.component';
import { PalComponent } from './pal/pal.component';

@NgModule({
  declarations: [
    AppComponent,
    GojsDiagramComponent,
    InspectorComponent,
    PalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
