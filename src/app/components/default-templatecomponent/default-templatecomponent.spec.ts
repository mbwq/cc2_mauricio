import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplatecomponent } from './default-templatecomponent';

describe('DefaultTemplatecomponent', () => {
  let component: DefaultTemplatecomponent;
  let fixture: ComponentFixture<DefaultTemplatecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTemplatecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTemplatecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
