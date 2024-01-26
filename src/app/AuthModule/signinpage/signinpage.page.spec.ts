import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninpagePage } from './signinpage.page';

describe('SigninpagePage', () => {
  let component: SigninpagePage;
  let fixture: ComponentFixture<SigninpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
