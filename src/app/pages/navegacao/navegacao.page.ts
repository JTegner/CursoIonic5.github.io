import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Navegacao2Page } from '../navegacao2/navegacao2.page';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  showPageNavegacao2() {
    this.navCtrl.navigateForward('navegacao2');
  }

}
