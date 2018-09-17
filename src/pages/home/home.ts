import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {Flashlight} from  '@ionic-native/flashlight'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn:boolean;
status:string;
  constructor(public navCtrl: NavController, private platform:Platform, private flash: Flashlight) {
this.platform.ready().then(()=> {
this.updateFlashlightStatus()
})
  }

switchOn(){
  this.flash.switchOn();
  this.updateFlashlightStatus()
}

switchOFF(){
  this.flash.switchOff();
  this.updateFlashlightStatus()
}

toogle(){
  this.flash.toggle();
  this.updateFlashlightStatus()
}


updateFlashlightStatus(){
  this.isOn=this.flash.isSwitchedOn();
}

// ShowStatus(){


// }

}

