import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faCrop } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faPaperPlane = faPaperPlane;
  faSquarePhone = faSquarePhone;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faAppStore = faAppStore;
  faCrop = faCrop;
  faCode = faCode
}
