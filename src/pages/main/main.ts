import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FooterTabsPage } from '../footer-tabs/footer-tabs';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private profile : string;
  private footerPage : any;

  constructor(public paramProfile : string) {
    this.profile = paramProfile;
    this.footerPage = new FooterTabsPage(this.profile);
  }

  footerTabs:any = this.footerPage;
}
