import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private EventsURL :string ="http://localhost:8080/api/events";
  private SpecialEventURL :string ="http://localhost:8080/api/special";

  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this.EventsURL)
  }

  getSpecialEvents(){
    return this.http.get<any>(this.SpecialEventURL)
  }
}
