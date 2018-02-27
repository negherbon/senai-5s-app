import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EvaluationStartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation-start',
  templateUrl: 'evaluation-start.html',
})
export class EvaluationStartPage {

  private mdThumbsUp = { color: 'black'};
  private mdThumbsDown = { color: 'black'};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluationStartPage');
  }

  @ViewChild('myInput') myInput: ElementRef;
  
  resize() {
    this.myInput.nativeElement.style.height = 'auto'
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

  alternateColor(iconClick){
    
    if(iconClick == 'md-thumbs-up'){
      this.mdThumbsUp.color   = 'green';
      this.mdThumbsDown.color = 'black';
    }else{
      this.mdThumbsDown.color = 'red';
      this.mdThumbsUp.color   = 'black';
    }
  
  }

}
