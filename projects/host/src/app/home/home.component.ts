import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  changeLang(lang: string) {
    this.translate.use(lang);
    this.setLanguage(this.router.url.split('?')[0], lang);
  }

  navigate(path: string): void {
    this.route.queryParams.subscribe(({ lang }) =>
      this.setLanguage(path, lang)
    );
  }

  setLanguage(path: string, lang: string): void {
    this.router.navigate([path], {
      queryParams: { lang },
    });
  }
}
