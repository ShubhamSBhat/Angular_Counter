import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemainderComponent } from './add-remainder.component';

describe('AddRemainderComponent', () => {
  let component: AddRemainderComponent;
  let fixture: ComponentFixture<AddRemainderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemainderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
