import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ButtonComponent } from './preview-components/button/button.component';
import { TextComponent } from './preview-components/text/text.component';

const routes: Routes = [
  {
    path: 'text',
    component: TextComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: '**',
    component: ButtonComponent
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
