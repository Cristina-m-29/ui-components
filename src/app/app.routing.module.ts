import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './preview-components/button/button.component';
import { IconComponent } from './preview-components/icon/icon.component';
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
    path: 'icon',
    component: IconComponent
  },
  {
    path: '**',
    component: ButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
