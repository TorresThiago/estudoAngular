import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: Images;
  erro: any;

  constructor(private crudService: CrudService) { 
    this.getter();
  }

  ngOnInit() {

  }

  getter(){
    this.crudService.getPhotos().subscribe((data: Images )=> {
      this.images = data;
      console.log("O data que foi recebido", data);
      console.log("A variável que preenchemos", this.images);
    },error => {
      this.erro = error;
      console.log("ERROR: ", error);
    });
  }

}
