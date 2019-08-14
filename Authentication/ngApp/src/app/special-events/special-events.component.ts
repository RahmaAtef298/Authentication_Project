import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  SpecialEvents=[];
  constructor(private _events : EventService,
              private _router : Router) { }

  ngOnInit() {

    this._events.getSpecialEvents()
      .subscribe(
        res => this.SpecialEvents=res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

}
