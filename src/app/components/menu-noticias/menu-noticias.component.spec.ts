import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoticiasComponent } from './menu-noticias.component';

describe('MenuNoticiasComponent', () => {
  let component: MenuNoticiasComponent;
  let fixture: ComponentFixture<MenuNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
