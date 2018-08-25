import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-activity-modal',
  templateUrl: './activity-modal.component.html',
  styleUrls: ['./activity-modal.component.css']
})
export class ActivityModalComponent implements OnInit {
  Add: Subject<any>;

  dateValue: any;
  activityValue: String;
  statusValue: String;
  Value: any;
  ValueOne: any;
  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    this.Add = new Subject();
  }
  add() {
    this.Add.next([this.dateValue, this.activityValue, this.statusValue]);
    this.modalRef.hide();
  }

}
