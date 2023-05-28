import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Service/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ShopWeb';
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
