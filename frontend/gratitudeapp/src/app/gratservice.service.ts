import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GratserviceService {

  constructor(private httpService: HttpClient) { }

  getAllGrats() {
    return this.httpService.get('http://localhost:5000/api/grats')
  }

  getRandomGrat() {
    return this.httpService.get('http://localhost:5000/api/grats/random')
  }

  getCount() {
    return this.httpService.get('http://localhost:5000/api/grats/count')
  }

  setGrat(data: any) {
    return this.httpService.post('http://localhost:5000/api/grats', data)
  }

  getGratById(id: String) {
    return this.httpService.get('http://localhost:5000/api/grats/' + id)
  }
}
