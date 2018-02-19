import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authervice: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }


  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up ...'
    });
    loading.present();
    this.authervice.signup(form.value.email, form.value.password)
      .then(data => {
          loading.dismiss()
      }
      ).catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
    });
  }

}
