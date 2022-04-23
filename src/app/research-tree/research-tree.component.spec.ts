import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTreeComponent } from './research-tree.component';

describe('ResearchTreeComponent', () => {
  let component: ResearchTreeComponent;
  let fixture: ComponentFixture<ResearchTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
