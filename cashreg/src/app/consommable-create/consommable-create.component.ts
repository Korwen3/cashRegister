import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-consommable-create',
  templateUrl: './consommable-create.component.html',
  styleUrls: ['./consommable-create.component.css']
})

export class ConsommableCreateComponent implements OnInit {  
  submitted = false;
  consommableForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.consommableForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.consommableForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.consommableForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.consommableForm.valid) {
      return false;
    } else {
      this.apiService.createConsommable(this.consommableForm.value).subscribe(
        (res) => {
          console.log('Consommable successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/consommables-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}