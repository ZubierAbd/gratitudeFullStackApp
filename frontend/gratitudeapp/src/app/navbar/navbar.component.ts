import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(public us: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.us.isLoggedIn();
  }

  logout() {
    this.us.logout();
  }

}
