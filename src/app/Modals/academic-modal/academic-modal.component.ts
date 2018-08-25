import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-academic-modal',
  templateUrl: './academic-modal.component.html',
  styleUrls: ['./academic-modal.component.css']
})
export class AcademicModalComponent implements OnInit {
  sendData: Subject<any>;
  academicForm: FormGroup;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.sendData = new Subject();

    this.academicForm = new FormGroup({
      graduate: new FormControl('', [Validators.required]),
      percentage: new FormControl('', [Validators.required,
        Validators.pattern('[0-9]{2,3}[.0-9]{}')]),
      y_passing: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    // console.log(this.profileForm.value);
    this.sendData.next(this.academicForm.value);
    this.modalRef.hide();
  }

}
