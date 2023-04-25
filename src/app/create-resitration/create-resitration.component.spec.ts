import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResitrationComponent } from './create-resitration.component';

describe('CreateResitrationComponent', () => {
  let component: CreateResitrationComponent;
  let fixture: ComponentFixture<CreateResitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateResitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
