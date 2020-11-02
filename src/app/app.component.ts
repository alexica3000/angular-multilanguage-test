import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multilanguage';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ro', 'ru']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
