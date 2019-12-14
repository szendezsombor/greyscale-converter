import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGreyPrewiewContainerComponent } from './image-grey-prewiew-container.component';

describe('ImageGreyPrewiewContainerComponent', () => {
  let component: ImageGreyPrewiewContainerComponent;
  let fixture: ComponentFixture<ImageGreyPrewiewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGreyPrewiewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGreyPrewiewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
