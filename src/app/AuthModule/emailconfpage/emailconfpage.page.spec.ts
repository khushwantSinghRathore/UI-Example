import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailconfpagePage } from './emailconfpage.page';

describe('EmailconfpagePage', () => {
  let component: EmailconfpagePage;
  let fixture: ComponentFixture<EmailconfpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmailconfpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
