import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YiiComplaintsService {
  url = environment.url;


  constructor(private http: HttpClient) { }
  fileComplaint(complaint){
    return this.http.post(`${this.url}`, complaint)
  }
}
