import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/services/config.service';
import { BaseConfig } from 'src/utility/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {

  /**
   *
   */
  constructor(private _configService:ConfigService) {
    
  }

  ngOnInit(): void {
      this._configService.getSettings().then(result=>{
        this.data = result;
      });
  }
  title = 'app01';
  message:string="";
  data:BaseConfig = new BaseConfig();

  private _isLoggedIn:boolean;

    get isLoggedIn():boolean {
      return this._isLoggedIn;
    }


    set isLoggedIn(value:boolean){
      this._isLoggedIn = value;

      if(value===true) this.message="Hoşgeldiniz";
      else this.message="Lütfen giriş yapın";
    }

    


}
