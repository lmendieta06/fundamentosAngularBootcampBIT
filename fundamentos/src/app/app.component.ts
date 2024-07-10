import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Se importa para poder usar logica en HTML
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // USO DE INTERPOLARIZACION
  nombreFramework: string = "Angular";
  horasBootcamp: number = 300;
  especialista: string = "Luisa Castaño";
  contenidoBootcamp = {
    tecnologia1 : "HTML",
    tecnologia2 : "JS",
    tecnologia3 : "CSS",
    tecnologia4 : "NODE.JS",
    tecnologia5 : "ANGULAR"
  }

  objetoProducto = {
    nombre : "galletas",
    cantidad : 30,
    estado : true
  }

  colorFondo: string = "";
  // forma correcta de manejar booleanos
  isLogged:boolean = true;
  isDelete:boolean = false;
  isShowed:boolean = false;
  productos: string[] = ["galletas","cupcakes","muss de maracuya"];
  // USO DE ENLACE DE DATOS

  saludo(){
    alert("HOLAAAAAA");
  }

  manejarMouseOver(){
    console.log("evento mouse sobre caja");
    this.colorFondo = "colorRojo";
  }

  manejarMouseOut(){
    console.log("Evento mouse fuera de la cajita");
    this.colorFondo = "colorVerde";
  }

  manejarClick(){
    console.log("Evento click")
    this.colorFondo = "colorPink";
  }

  cambioShowed(){
    this.isShowed = !this.isShowed;
  }
}
