import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignuppagePage } from './signuppage.page';

describe('SignuppagePage', () => {
  let component: SignuppagePage;
  let fixture: ComponentFixture<SignuppagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignuppagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
