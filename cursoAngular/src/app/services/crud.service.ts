import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  //O Http Client deve sempre ser iniciado num construtor
  constructor(private http: HttpClient) { }
  
  public getPhotos():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
