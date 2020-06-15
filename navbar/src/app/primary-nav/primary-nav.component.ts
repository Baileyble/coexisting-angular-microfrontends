import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  onLogout() {
    this.session.stopSession();
    document.location.href = '/login';
  }

}
