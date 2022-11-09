import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainderListComponent } from './remainder-list.component';

describe('RemainderListComponent', () => {
  let component: RemainderListComponent;
  let fixture: ComponentFixture<RemainderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
