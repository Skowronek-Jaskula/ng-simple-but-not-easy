import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayInlineComponent } from './pages/display-inline/display-inline.component';
import { PositionComponent } from './pages/position/position.component';
import { FlexboxComponent } from './quizes/flexbox/flexbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayInlineComponent,
    PositionComponent,
    FlexboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
