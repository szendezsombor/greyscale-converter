import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGreyComponent } from './image-grey.component';

describe('ImageGreyComponent', () => {
  let component: ImageGreyComponent;
  let fixture: ComponentFixture<ImageGreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
