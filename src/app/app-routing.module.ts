import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInlineComponent } from './pages/display-inline/display-inline.component';
import { PositionComponent } from './pages/position/position.component';
import { FlexboxComponent } from './quizes/flexbox/flexbox.component';
import { BootstrapShowcaseComponent } from './pages/bootstrap-showcase/bootstrap-showcase.component';

const routes: Routes = [
  { path: 'display-inline', component: DisplayInlineComponent },
  { path: 'position', component: PositionComponent },
  { path: 'flexbox-quiz', component: FlexboxComponent },
  { path: 'bootstrap-showcase', component: BootstrapShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
