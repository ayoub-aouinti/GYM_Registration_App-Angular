import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitrationListComponent } from './resitration-list.component';

describe('ResitrationListComponent', () => {
  let component: ResitrationListComponent;
  let fixture: ComponentFixture<ResitrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResitrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
