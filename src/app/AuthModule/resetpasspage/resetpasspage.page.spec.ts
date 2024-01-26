import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetpasspagePage } from './resetpasspage.page';

describe('ResetpasspagePage', () => {
  let component: ResetpasspagePage;
  let fixture: ComponentFixture<ResetpasspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetpasspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
