import { Consommable } from '../model/Consommable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-consommable-edit',
  templateUrl: './consommable-edit.component.html',
  styleUrls: ['./consommable-edit.component.css']
})

export class ConsommableEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  consommableData: Consommable[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateConsommable();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getConsommable(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getConsommable(id) {
    this.apiService.getConsommable(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        price: data['price'],
        type: data['type'],
      });
    });
  }

  updateConsommable() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateConsommable(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/consommables-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}