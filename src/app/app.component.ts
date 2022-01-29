import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12-demo';
  public respuesta:any;
  form!: FormGroup;

  constructor( private route:ActivatedRoute, private RestService: RestService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap

      this.cargarData(params.variable)
    });

    this.form=this.formBuilder.group({
      Name:['',Validators.required],
      Email:['',Validators.required],
      Semestre:['',Validators.required],
      Matricula:['',Validators.required],
      Nivel:['',Validators.required],
      Carrera:['',Validators.required]

    });
  }


  cargarData(id:String){
    this.RestService.get('/index').subscribe(respuesta => {
      this.respuesta=respuesta;
    })
  }

  datosEnviar(){
    return this.RestService
    .httpenviarData({
      nombre:this.form.value.Name,
      email:this.form.value.Email,
      nivel:this.form.value.Matricula,
      semestre:this.form.value.Semestre,
      matricula:this.form.value.Nivel,
      carrera:this.form.value.Carrera
     })


    /*console.log(this.form.value.Name);
    console.log(this.form.value.Email);
    console.log(this.form.value.Matricula);
    console.log(this.form.value.Nivel);
   this.RestService.post('http://localhost_8080/persona/create',
    {
        nombre:this.form.value.Name,
        email:this.form.value.Email,
        nivel:this.form.value.Matricula,
        semestre:this.form.value.Semestre,
        matricula:this.form.value.Nivel,
        carrera:this.form.value.Carrera


    }).subscribe(respuesta =>{
      this.respuesta=respuesta;
      console.log(respuesta);
    })*/

  }

}
function httpenviarData(arg0: {}) {
  throw new Error('Function not implemented.');
}


