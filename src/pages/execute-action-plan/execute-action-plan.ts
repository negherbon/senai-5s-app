import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExecuteActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-execute-action-plan',
  templateUrl: 'execute-action-plan.html',
})
export class ExecuteActionPlanPage {

  accordionExapanded = false;
  @ViewChild("answers") answers: any;
  icon: string = "arrow-forward";

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExecuteActionPlanPage');
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.answers.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.answers.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.answers.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.answers.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

}
