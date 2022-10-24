import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { NzMessageService } from 'ng-zorro-antd/message';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

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
  data: any[] = [];
  searchText;

  constructor(public userService: UserService) { }

  async ngOnInit() {
    this.data = await firstValueFrom(this.userService.getAllUsers());
    console.log(this.data);
  }

  removeAdmin(email: any){
    this.userService.removeAdmin(email)
  }

  dropUser(email): any {
    this.userService.dropUser(email)
  }

  search(value: string): void {
    this.data = this.data.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }

  dropUSer(email: any): any {
    this.userService.dropUser(email);
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
}
