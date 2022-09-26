import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { StoreService } from 'projects/host/src/app/home/store.service';
import { FimsService } from './films.service';

class TranslateServiceStub {
  setDefaultLang(lang: string) {}
  use(lang: string) {}
  get onLangChange() {
    return of({ lang: 'en' });
  }
}

class StoreMockService {
  getFilms() {
    return [];
  }
  setConfig() {}
  setFilms() {}
  setSeries() {}
  getSeries() {}
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: StoreService;
  let filmServie: FimsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [HomeComponent],
      providers: [
        FimsService,
        { provide: StoreService, useClass: StoreMockService },
        { provide: TranslateService, useClass: TranslateServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getConfigHost, getData', () => {
    spyOn(component, 'getConfigHost');
    spyOn(component, 'getData');
    component.ngOnInit();
    expect(component.getConfigHost).toHaveBeenCalled();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should call changeLang', () => {
    spyOn(component, 'changeLang');
    component.getConfigHost();
    expect(component.changeLang).toHaveBeenCalled();
  });

  it('should create changeLang', () => {
    component.changeLang('es');
    expect(component.changeLang).toBeTruthy();
  });
});
