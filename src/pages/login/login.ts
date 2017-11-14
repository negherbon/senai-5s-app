import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loading: any;
  private loginData = { email:'', password:'' };
  private data: any;

  constructor(
    public  navCtrl    : NavController, 
    public  navParams  : NavParams,
    public  authService: AuthServiceProvider, 
    public  loadingCtrl: LoadingController, 
    private toastCtrl  : ToastController
  ) {}

  goToForgotPassWord(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.token);
      this.navCtrl.setRoot(DashboardPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err._body);
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Entrando...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
  }

}
