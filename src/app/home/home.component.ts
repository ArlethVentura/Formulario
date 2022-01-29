import { Component, OnInit } from '@angular/core';
import{RestService}from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listA:any=[]//Array<any>=[]

  constructor(private RestService:RestService){

  }
   ngOnInit():void{
     this.cargarData();
   }
  public cargarData(){
    this.RestService.get('http://localhost:8080/post')
    .subscribe(respuesta =>{
      this.listA = respuesta;

    })
  }

}
