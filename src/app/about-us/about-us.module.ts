import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AboutUsStoreName } from './store/about-us.store';
import { AboutUsReducer } from './store/about-user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AboutUsEffects } from './store/about-us.effects';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    StoreModule.forFeature(AboutUsStoreName,AboutUsReducer),
    EffectsModule.forFeature([AboutUsEffects])
    
  ]
})
export class AboutUsModule { }
