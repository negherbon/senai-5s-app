import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule  } from '@angular/http';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password'

import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FooterTabsPage } from '../pages/footer-tabs/footer-tabs';
import { EvaluationsPage } from '../pages/evaluations/evaluations';
import { EvaluationResumePage } from '../pages/evaluation-resume/evaluation-resume'
import { UserConfigPage } from '../pages/user-config/user-config';  
import { MainPage } from '../pages/main/main';
import { ConsumesApiProvider } from '../providers/consumes-api/consumes-api';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ForgotPasswordPage,
    DashboardPage,
    FooterTabsPage,
    EvaluationsPage,
    EvaluationResumePage,
    UserConfigPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ForgotPasswordPage,
    DashboardPage,
    FooterTabsPage,
    EvaluationsPage,
    UserConfigPage,
    EvaluationResumePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ConsumesApiProvider
  ]
})
export class AppModule {}
