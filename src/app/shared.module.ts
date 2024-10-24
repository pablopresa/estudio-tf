import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './services/noticias.service';
import { MensajesService } from './services/mensajes.service';
import { UsuarioService } from './services/usuario.service';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [RouterOutlet, HttpClientModule],
  exports: [CommonModule, ButtonModule, RouterOutlet, ToolbarModule, AvatarModule, ImageModule,
    CardModule, InputTextModule, HttpClientModule, InputTextModule, FormsModule, PasswordModule, FileUploadModule, InputTextareaModule, FloatLabelModule, MessagesModule],
  providers: [NoticiasService, MensajesService, UsuarioService, AuthService]
})
export class SharedModules { }

