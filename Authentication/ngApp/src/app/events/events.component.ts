import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events=[];
  constructor(private _events : EventService) { }

  ngOnInit() {

    this._events.getEvents()
      .subscribe(
        res => this.Events=res,
        err => console.log(err)
      )

  }

}
