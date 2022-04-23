import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchTreeComponent } from './research-tree/research-tree.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchTreeComponent,
    ResearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
