import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetpasspagePage } from './forgetpasspage.page';

describe('ForgetpasspagePage', () => {
  let component: ForgetpasspagePage;
  let fixture: ComponentFixture<ForgetpasspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgetpasspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
