import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionalPage } from './conversional.page';

const routes: Routes = [
  {
    path: '',
    component: ConversionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionalPageRoutingModule {}
