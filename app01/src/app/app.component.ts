import { Component, OnInit } from '@angular/core';
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
  data:BaseConfig = new BaseConfig();


}
