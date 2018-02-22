import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map"

@Injectable()
export class DropdownService {

  constructor(private http: Http) { }


  getPlanetas() {
    return this.http.get('assets/dados/planetas.json')
      .map((res: Response) => res.json());
  }

}
