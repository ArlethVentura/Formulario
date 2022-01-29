import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);//GET
  }
  public post(url:string,body:any){//post
    return this.http.post(url,body);
  }

  httpenviarData(body:any){
    return this.http.post('Localhost:8080/persona/create',body)
    .toPromise();
  }

}
