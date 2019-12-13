import { Component } from "@angular/core";

@Component({
  selector: "micomponente",
  templateUrl: "./micomponente.component.html"
})
export class MiComponente {
  public titulo: string;
  public comentario: string;
  public year: number;

  constructor() {
    this.titulo =
      "En general lo más importante que he aprendido de angular es:";
    this.comentario =
      "Que puedes agregar muchos componentes, COMPONENTES PARA TODOS!";
    this.year = 2020;
    console.log("Cargando un componente bajo el footeeer cargado!!");
    console.log(this.comentario, this.comentario, this.year);
  }
}

//Una ves creo mi componente me dirijo al app.module.ts para tenerlo disponible en cualqueir aprte de la aplicación
//para crear un componente desde consola se escribe ng generate component
