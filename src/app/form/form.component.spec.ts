import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(()=>TestBed.configureTestingModule({
    providers:[FormComponent]
  }))
  beforeEach(() => {
    const fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('Form Component Present', () => {
    expect(component).toBeTruthy();
  });
  it('Checking the city', () => {
    component.selectedCountry = "India";
    var a = component.selectChangeHandler();
    expect(a[1].name).toBe('Andhra Pradesh');
  });
});
