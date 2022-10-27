import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fr_FR, NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LottieModule } from 'ngx-lottie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ContactComponent } from './pages/contact/contact.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { PlanningComponent } from './pages/planning/planning.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptors';
import { ProfileComponent } from './pages/profile/profile.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzMessageModule } from 'ng-zorro-antd/message';







registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    PlanningComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    PlanningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzTagModule,
    LottieModule,
    NzButtonModule,
    NzCardModule,
    NzTypographyModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzSelectModule,
    NzCarouselModule,
    NzCommentModule,
    NzNotificationModule,
    NzImageModule,
    NzUploadModule,
    NzDatePickerModule,
    NzCalendarModule,
    NzAvatarModule,
    NzModalModule,
    NzTabsModule,
    NzListModule,
    NzCheckboxModule,
    Ng2SearchPipeModule,
    NzMessageModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: LOCALE_ID, useValue: fr_FR },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
