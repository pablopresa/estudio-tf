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
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './services/noticias.service';

@NgModule({
  declarations: [],
  imports: [RouterOutlet, ImageCardComponent, HttpClientModule],
  exports: [CommonModule, ButtonModule, RouterOutlet, ToolbarModule, AvatarModule, ImageModule,
    CardModule, ImageCardComponent, InputTextModule, HttpClientModule],
    providers:[NoticiasService]
})
export class SharedModules { }

