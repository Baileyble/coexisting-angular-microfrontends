import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';

  constructor(private session: SessionService, private auth: AuthService) {}

  ngOnInit() {
    const token = this.session.getToken();

    if (!token || !this.auth.isTokenValid(token)) {
      document.location.href = '/login';
    }
  }
}
