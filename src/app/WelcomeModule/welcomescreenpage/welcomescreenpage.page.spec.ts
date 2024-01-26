import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomescreenpagePage } from './welcomescreenpage.page';

describe('WelcomescreenpagePage', () => {
  let component: WelcomescreenpagePage;
  let fixture: ComponentFixture<WelcomescreenpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WelcomescreenpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
