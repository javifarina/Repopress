import { bolsa } from '../model/bolsa';
import { Injectable } from '@angular/core';


@Injectable()
export class BolsaService {

  _BolsaList: bolsa[] = [];

  constructor() { }

  addBolsa(bolsa: bolsa) {
    bolsa.id = this._BolsaList.length + 1;
    this._BolsaList.push(bolsa);
  }

  editBolsa(bolsa: bolsa) {
    const index = this._BolsaList.findIndex(c => c.id === bolsa.id);
    this._BolsaList[index] = bolsa;
  }

  deleteBolsa(id: number) {
    const bolsa = this._BolsaList.findIndex(c => c.id === id);
    this._BolsaList.splice(bolsa, 1);
  }

  getAllBolsas() {
    return this._BolsaList;
  }
}