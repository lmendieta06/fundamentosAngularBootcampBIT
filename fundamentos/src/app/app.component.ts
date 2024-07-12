import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Se importa para poder usar logica en HTML
import { CommonModule } from '@angular/common';
// Para formularios driven-templates
import { FormsModule } from '@angular/forms';
// Para formularios reactivos
// Grupos y controles
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
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
  // ----------------------------------------------------
  // VARIABLES ASOCIADAS A FORMULARIOS
  colorFavorito:string = "";
  nombre:string = "";
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
  // --------------------------------------------------------------
  // FORMULARIOS DRIVEM-TEMPLATES

  manejarEnvio(){
    alert(`FORMULARIO DRIVEN-TEMPLATE
      los datos del formulario son:
       ${this.colorFavorito} - ${this.nombre}`);
  }

  // FORMULARIOS REACTIVOS
  // 1- CREAR EL GRUPO (DEPENDE DE QUE HAGA EL FORMULARIO)
  login = new FormGroup({
      // 2. CREAR LOS CONTROLES (DEPENDEN DE LOS INPUTS QUE SE QUIERAN ALMACENAR)
    correo : new FormControl(""),
    contrasena : new FormControl("")

  })

  // 3. CREACION DE METODO

  manejarEnvioLogin(){
    // Los toma como objeto
    console.log("Valores ingresados:", this.login.value );
    // Tomar un dato en especifico
    console.log("Valores ingresados:", this.login.get("correo")?.value );
  }

  // 4. CONFIGURAR EL ENVIO DESDE EL HTML (AGREGAR ATRIBUTOS O PROPIEDADES NECESARIAS EN FORMS)
  
}
