import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{RestService}from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   //public id:any;
   public respuesta:any;
   public form!: FormGroup;

  constructor( private route:ActivatedRoute, private RestService: RestService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params}=paramMap

      this.cargarData(params.variable)
    });

    this.form=this.formBuilder.group({
      Name:['',Validators.required],
      Email:['',Validators.required,Validators.email],
      Semestre:['',Validators.required],
      Matricula:['',Validators.required],
      Nivel:['',Validators.required],
      Carrera:['',Validators.required]

    });
  }


  cargarData(id:String){
    this.RestService.get('http://localhost_8080/post/${id}').subscribe(respuesta => {
      this.respuesta=respuesta;
    })
  }

  public enviarData(){
    this.RestService.post('http://localhost_8080/datos',
    {
        Text:this.form.value.Name

    }).subscribe(respuesta =>{

    })

  }
}
