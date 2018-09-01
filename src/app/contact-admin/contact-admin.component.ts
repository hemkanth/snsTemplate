import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrls: ['./contact-admin.component.css']
})
export class ContactAdminComponent implements OnInit {
  contactAdminForm: FormGroup;
  name: FormControl;
  rollNo: FormControl;
  batch: FormControl;
  department: FormControl;
  course: FormControl;
  tutor: FormControl;
  c_number: FormControl;
  email: FormControl;
  subject: FormControl;
  query: FormControl;

  constructor() { }

  ngOnInit() {
    this.contactAdminForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z .]*')]),
      rollNo: new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]),
      batch: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}[-]{1}[0-9]{4}')]),
      department: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
      course: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      tutor: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z .]*')]),
      c_number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z0-9]*[@]{1}[a-z]*[.]{1}[a-z]*')]),
      subject: new FormControl('', [Validators.required]),
      query: new FormControl('', [Validators.required, Validators.maxLength(250)])
    });
  }
  onSubmit() {
    console.log(this.contactAdminForm.value);
    window.alert('success');
    this.contactAdminForm.reset();
  }

}
