import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { NzMessageService } from 'ng-zorro-antd/message';
import { firstValueFrom } from 'rxjs';
import { PlanningService } from 'src/app/core/services/planning.service';
import { UserService } from 'src/app/core/services/user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  date = new Date();
  mode: NzCalendarMode = 'month';
  isVisible = false;
  users: any[] = [];
  hours: any[] = [];
  availableSchedules: any;
  searchText: any;

  constructor(public userService: UserService, public planningService: PlanningService) { }

  async ngOnInit() {
    this.users = await firstValueFrom(this.userService.getAllUsers());
  }

  async checkSelectedUser(user: any) {
    var admin: any = await firstValueFrom(this.userService.getUserById(user.id));
    if (admin.admin) {
      console.log("if ok");
      await firstValueFrom(this.userService.removeAdmin(user.id));
    } else {
      console.log("else ok");
      await firstValueFrom(this.userService.addAdmin(user.id));
    }
  }

  async getSchedules(selected_date: any) {
    this.availableSchedules = await firstValueFrom(this.planningService.getSchedulesAt(formatDate(selected_date, 'yyyy-MM-dd', 'en')));
    this.availableSchedules.hours.forEach(elementhour => {
      console.log(elementhour.time);
      this.hours.push(elementhour);
    });
  }

  async removeUser(user: { id: any; }) {
    await firstValueFrom(this.userService.removeUser(user.id));
  }

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

  select(date: Date): Date {
    return date;
  }

  checkpassdate = (date: Date) => {
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
}
