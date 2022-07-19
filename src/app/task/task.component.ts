import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  
  
  // let datetimepicker: DateTimePicker = new DateTimePicker({
  //   renderDayCell: disableDate,
  //   placeholder: 'Select a date and time',
  //   width: "233px"
  // });
  // datetimepicker.appendTo('#datetimepicker');
  // datetimepicker.show();

  // function disableDate(args: RenderDayCellEventArgs): void {
  //   /*Date need to be disabled*/
  //   if (args.date.getDay() === 0 || args.date.getDay() === 6) {
  //       args.element.classList.add('e-highlightweekend');
  //   }
  // }
}
  // 

