import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayInlineComponent } from './pages/display-inline/display-inline.component';
import { PositionComponent } from './pages/position/position.component';
import { FlexboxComponent } from './quizes/flexbox/flexbox.component';
import { HeroComponent } from './hero/hero.component';
import { BootstrapShowcaseComponent } from './pages/bootstrap-showcase/bootstrap-showcase.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayInlineComponent,
    PositionComponent,
    FlexboxComponent,
    HeroComponent,
    BootstrapShowcaseComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
