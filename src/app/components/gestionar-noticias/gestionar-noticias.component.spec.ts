import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarNoticiasComponent } from './gestionar-noticias.component';

describe('GestionarNoticiasComponent', () => {
  let component: GestionarNoticiasComponent;
  let fixture: ComponentFixture<GestionarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
