import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimpleExample } from './component-angular.component';

describe('ComponentAngularComponent', () => {
  let component: AutocompleteSimpleExample;
  let fixture: ComponentFixture<AutocompleteSimpleExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSimpleExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSimpleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
