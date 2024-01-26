import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptvrfypagePage } from './optvrfypage.page';

describe('OptvrfypagePage', () => {
  let component: OptvrfypagePage;
  let fixture: ComponentFixture<OptvrfypagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OptvrfypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
