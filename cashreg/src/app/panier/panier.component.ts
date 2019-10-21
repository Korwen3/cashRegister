import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  Consommable:any = [];

  constructor(private apiService: ApiService) {
    this.readConsommable();
  }

  ngOnInit() {}

  readConsommable(){
    this.apiService.getConsommables().subscribe((data) => {
     this.Consommable = data;
    })
  }

  removeConsommable(consommable, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteConsommable(consommable._id).subscribe((data) => {
          this.Consommable.splice(index, 1);
        }
      )
    }
  }

  getColor(type){
    if (type == "Boisson"){ return "{background-color:blue}";}
    else if (this.conso.type === "Collation"){ return "{background-color:red}";}
    else ( console.log(this.conso.type));
  }

/*
  onClic(){
    var panier = document.getElementById('panier');
    var newP = document.createElement('p');
    newP.textContent = ;
  }
  */
}
