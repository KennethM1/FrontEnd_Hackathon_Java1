import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecharComponent } from './createchar.component';

describe('CreatecharComponent', () => {
  let component: CreatecharComponent;
  let fixture: ComponentFixture<CreatecharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
