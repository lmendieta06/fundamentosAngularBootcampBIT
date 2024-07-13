import { Component } from '@angular/core';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';
@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  // CREAR VARIABLE PARA ENVIAR A HIJO
  textoEnviar:string = "Hola soy tu padre";
  colorFavorito:string = "Rojo";
  trabajos: string[] = ["Cajero", "Bombero", "Policia"];
  infoPersonal = {
    nombre:"Cesar",
    apellido:"Mendieta",
    numeroCedula:1033683621,
    edad:50
  }
}
