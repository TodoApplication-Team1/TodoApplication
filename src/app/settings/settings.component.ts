import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content:any) {
  
    this.modalService.open(content, { centered: true });
  }
}
