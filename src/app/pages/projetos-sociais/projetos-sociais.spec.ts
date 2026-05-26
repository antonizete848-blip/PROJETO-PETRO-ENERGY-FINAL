import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetosSociaisComponent } from './projetos-sociais';
describe('ProjetosSociais', () => {
  let component: ProjetosSociaisComponent;
  let fixture: ComponentFixture<ProjetosSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosSociaisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetosSociaisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
