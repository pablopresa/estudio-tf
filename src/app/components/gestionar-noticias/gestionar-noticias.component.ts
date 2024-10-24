import { Component, EventEmitter, Output } from '@angular/core';
import { Noticia } from '../../model/noticia'; // Asegúrate de que esta ruta es correcta.
import { NoticiasService } from '../../services/noticias.service';
import { SharedModules } from '../../shared.module';
import { Message } from 'primeng/api';
import { SliceConPuntosPipe } from "../../pipes/slice-con-puntos.pipe";

@Component({
  selector: 'app-gestionar-noticias',
  standalone: true,
  imports: [SharedModules, SliceConPuntosPipe],
  templateUrl: './gestionar-noticias.component.html',
  styleUrl: './gestionar-noticias.component.css'
})
export class GestionarNoticiasComponent {

  @Output() volver: EventEmitter<void> = new EventEmitter();
  noticias: Noticia[] = []; // Lista de noticias
  noticiaEditando: Noticia | null = null; // Noticia en proceso de edición
  mensajeSinNoticias: Message[] = [{ severity: 'warn', summary: 'No hay noticias para mostrar.' }];

  constructor(private noticiasService: NoticiasService) {
    this.cargarNoticias(); // Cargar las noticias al iniciar
  }

  cargarNoticias() {
    this.noticiasService.obtenerNoticias().subscribe((data: Noticia[]) => {
      this.noticias = data;
    });
  }

  editarNoticia(noticia: Noticia) {
    this.noticiaEditando = { ...noticia }; // Clonar la noticia para editarla
  }

  eliminarNoticia(noticia: Noticia) {
    if (confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      this.noticiasService.eliminarNoticia(noticia).subscribe(() => {
        this.cargarNoticias(); // Recargar noticias después de eliminar
      });
    }
  }

  guardarEdicion() {
    if (this.noticiaEditando) {
      this.noticiasService.editarNoticia(this.noticiaEditando).subscribe(() => {
        this.noticiaEditando = null;
        this.cargarNoticias(); // Recargar la lista tras editar
      });
    }
  }

  irAlMenu() {
    this.volver.emit();
  }
}
