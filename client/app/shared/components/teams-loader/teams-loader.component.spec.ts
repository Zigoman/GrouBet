import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLoaderComponent } from './teams-loader.component';

describe('TeamsLoaderComponent', () => {
  let component: TeamsLoaderComponent;
  let fixture: ComponentFixture<TeamsLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
