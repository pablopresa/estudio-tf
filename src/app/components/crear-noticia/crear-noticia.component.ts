import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { NoticiasService } from '../../services/noticias.service';
import { Router } from '@angular/router';
import { CrearNoticiaDto } from '../../model/crear-noticia-dto';
import { NgForm } from '@angular/forms';
import { Utiles } from '../../resources/utiles';

@Component({
  selector: 'app-crear-noticia',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './crear-noticia.component.html',
  styleUrl: './crear-noticia.component.css'
})
export class CrearNoticiaComponent {


  constructor(private noticiasService: NoticiasService, private router: Router) { }

  titulo: string = '';
  contenido: string = '';
  imagenUrl = '';
  uploadSuccess = false;
  uploadError = false;
  @Output() volver: EventEmitter<void> = new EventEmitter();

  crear(noticiaForm: NgForm) {
    if (this.formValid()) {
      this.noticiasService.crearNoticia(new CrearNoticiaDto(this.titulo, this.contenido, this.imagenUrl, new Date())).subscribe(
        (respuesta) => {
          this.limpiarFormulario(noticiaForm);
          this.volver.emit();
        }
      )
    }
    else {
      console.error('Datos inválidos en el formulario.');
    }
  }

  onUpload(event: any) {
    // Manejo de carga de imagen
    this.uploadSuccess = true;
  }

  onUploadError(event: any) {
    this.uploadError = true;
  }

  onUploadSelect(event: any) {
    this.uploadSuccess = false; // Reiniciar el estado
    this.uploadError = false;
  }


  formValid(): boolean {
    const isFormValid = this.contenido != null && this.contenido.trim() !== '' && this.titulo != null && this.titulo.trim() !== '';
    const isImageAttached = this.uploadSuccess;
    const isUrlValid = this.imagenUrl ? Utiles.isValidUrl(this.imagenUrl) : false;
    return isFormValid && (isUrlValid || isImageAttached);
  }

  irAlMenu() {
    this.volver.emit();
  }

  limpiarFormulario(noticiaForm: NgForm) {
    noticiaForm.resetForm();
    this.uploadSuccess = false;
    this.uploadError = false;
  }

  public isValidUrl(url: string) {
    return Utiles.isValidUrl(url);
  }

}
