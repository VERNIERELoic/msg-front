import { Component, EventEmitter, OnInit } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  date = new Date();
  mode: NzCalendarMode = 'month';
  tabs = ['yass', 'Loïc', 'Sifo'];

  constructor() { }

  ngOnInit(): void {
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

  select(ret: Date): Date {
    console.log('nzSelectChange', ret);
    return ret;
  }

  checkpassdate =(date : Date)=> {
    console.log(date, date > new Date)
    return date < new Date();
    // if () < this.date) {
    //   console.log('pass date : false');
    //   return false
    // } else {
    //   console.log('pass date : true');
    //   return true
    // }
  }
}