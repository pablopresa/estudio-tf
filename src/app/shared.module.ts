import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar'; 
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [ RouterOutlet, ImageCardComponent],
  exports: [ CommonModule, ButtonModule, RouterOutlet, ToolbarModule, AvatarModule, ImageModule, CardModule, ImageCardComponent, InputTextModule],
})
export class SharedModules {}
