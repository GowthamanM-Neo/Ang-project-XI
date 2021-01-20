import { Component, OnInit } from '@angular/core';
var country = require('country-list-js');
var worldMapData = require('city-state-country');
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countryNames = country.names().sort();
  selectedCountry:String="";
  statesList:any='';
  constructor() { }
  ngOnInit(): void {
  }
  selectChangeHandler (event: any) {
    this.selectedCountry = event.target.value;
    console.log(this.selectedCountry);
    
    this.statesList = worldMapData.getAllStatesFromCountry(this.selectedCountry);
    
  }
}
