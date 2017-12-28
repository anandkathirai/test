import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist-component.css']
})
export class UsersListComponent implements OnInit {
  usersForm: FormGroup;
  submitted: boolean =false;
  constructor(private formBuilder: FormBuilder) {
    this.usersForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required]],
      employeeId: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    
  }
  submitForm(){
      if(!this.usersForm.valid){
      this.submitted = true;
      return;
    }
  }
}
