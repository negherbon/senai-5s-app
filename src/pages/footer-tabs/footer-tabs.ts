import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { UserConfigPage } from '../user-config/user-config'

/**
 * Generated class for the FooterTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footer-tabs',
  templateUrl: 'footer-tabs.html',
})
export class FooterTabsPage {
  
  private profile : string;
  private dashBoard : any;
  private nav : any;
  private navParam : any

  constructor(public paramProfile:string){
    this.profile = paramProfile;
    this.dashBoard = this.switchDashboard();
    this.nav = NavController;
    this.navParam = NavParams
  }

  switchDashboard(){
    if(this.profile == '0'){ console.log("perfil Avaliador"); return new DashboardPage(this.nav, this.navParam);  }
    if(this.profile == '1'){ return UserConfigPage; } 
  }

  dashBoardPage  = this.dashBoard;
  userConfigPage = UserConfigPage;
}
