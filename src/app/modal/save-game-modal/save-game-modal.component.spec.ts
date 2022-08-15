import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveGameModalComponent } from './save-game-modal.component';

describe('SaveGameModalComponent', () => {
  let component: SaveGameModalComponent;
  let fixture: ComponentFixture<SaveGameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveGameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
