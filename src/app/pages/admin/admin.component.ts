import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  date = new Date();
  mode: NzCalendarMode = 'month';
  isVisible = false;
  isAdmin = false;

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

  checkpassdate = (date: Date) => {
    console.log(date, date > new Date)
    return date < new Date();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

}
