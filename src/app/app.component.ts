import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'facebookDashboard';

}


export class MyComponentOrService {
 
  constructor(private fb: FacebookService) {
 
    const initParams: InitParams = {
      appId: '666709170961617',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
  }
 
}