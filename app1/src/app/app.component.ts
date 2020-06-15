import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app1';
  yoshiUrl = assetUrl("yoshi.png");

  constructor(private session: SessionService, private auth: AuthService) {}

  ngOnInit() {
    const token = this.session.getToken();

    if (!token || !this.auth.isTokenValid(token)) {
      document.location.href = '/login';
    }
  }
}
