import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionalPageRoutingModule } from './conversional-routing.module';

import { ConversionalPage } from './conversional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionalPageRoutingModule
  ],
  declarations: [ConversionalPage]
})
export class ConversionalPageModule {}
