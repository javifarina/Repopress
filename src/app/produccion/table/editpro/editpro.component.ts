import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProduccionService } from './../../../servicio/produccion';
import { produccion } from './../../../model/produccion';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
 formaProd:FormBuilder;
  constructor() { }

  ngOnInit(): void {
  }
GuardarProd(){}


}
