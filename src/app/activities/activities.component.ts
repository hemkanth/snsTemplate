import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivityModalComponent } from '../Modals/activity-modal/activity-modal.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
  openModal() {
    this.bsModalRef = this.modalService.show(ActivityModalComponent);
  }

}
