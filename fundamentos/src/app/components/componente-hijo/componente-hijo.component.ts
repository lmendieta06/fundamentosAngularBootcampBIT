import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
  // PREPARAR PARA RECIBIR
  // Con @Input en el hijo se prepara para recibir informacion de la parte del padre
  @Input() textoRecibir : string = "";
  @Input() colorFavoritoPadre : string = "";
  @Input() trabajosPadre : string[] = [];
  @Input() infoPadre = {
    nombre : "",
    apellido : "",
    numeroCedula : 0,
    edad : 0
  }


}
