import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NouvelleEditionService {

  constructor(private router: Router, private http: HttpClient) { }
  attachFile(edition) {
    return this.http.put(`${environment.BASE_API_URL}/attachFile`, edition);
  }
  ajouterEdition(edition) {
    console.log("in service ", edition.sections[0]);
    return this.http.post(`${environment.BASE_API_URL}/create`, edition);
  }
}
