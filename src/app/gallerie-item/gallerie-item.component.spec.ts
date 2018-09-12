import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerieItemComponent } from './gallerie-item.component';

describe('GallerieItemComponent', () => {
  let component: GallerieItemComponent;
  let fixture: ComponentFixture<GallerieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
