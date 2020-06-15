import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  constructor(private auth: AuthService, private session: SessionService) {}

  onLogin() {
    const token = this.auth.authenticate();
    this.session.startSession(token);
    document.location.href = '/';
  }
}
