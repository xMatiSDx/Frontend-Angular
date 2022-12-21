import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsItemsComponent } from './skills-items.component';

describe('SkillsItemsComponent', () => {
  let component: SkillsItemsComponent;
  let fixture: ComponentFixture<SkillsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
