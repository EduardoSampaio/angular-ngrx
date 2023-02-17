import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCustomComponent } from './notification-custom.component';

describe('NotificationCustomComponent', () => {
  let component: NotificationCustomComponent;
  let fixture: ComponentFixture<NotificationCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
