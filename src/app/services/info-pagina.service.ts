import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  //info: any = {}; //No deberia usarse any
  cargada = false;
  equipo: any = [];

  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();
    // Prueba de donde aparece
    // console.log('Servicio de infoPagina listo')
    //Leer el archivo JSON
   
  }
  //metodos
  private cargarInfo(){  //Leer archivo de JSON
    this.http.get('assets/data/data-paginas.json')
    .subscribe( resp => {

      this.cargada = true;
      this.info = resp;
      console.log( resp );
      
    })
  }
  private cargarEquipo(){  //Leer archivo de JSON
    this.http.get('https://portfolio-angular-html-mk-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
    .subscribe( resp => {

      this.equipo = resp;
      console.log( resp );
      
      
    })

  }
}