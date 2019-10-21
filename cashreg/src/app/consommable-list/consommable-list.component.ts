import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-consommable-list',
  templateUrl: './consommable-list.component.html',
  styleUrls: ['./consommable-list.component.css']
})

export class ConsommableListComponent implements OnInit {
  
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

}