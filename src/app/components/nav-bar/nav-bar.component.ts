import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { isNull } from 'util';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public navBar: Boolean;
  public isAdmin: Boolean;
  public input: String;
  private notifyConfig: Object;

  constructor(public users: UsersService, private route: Router, private notify: SnotifyService) {
    this.notifyConfig = {
      timeout: 5000,
      showProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true
    };
   }

  ngOnInit() {
    this.switchNavBar();
    this.users.getEmitedValue().subscribe((data) => {
      this.navBar = data;
    });
    this.users.getIsAdmin().subscribe((data) => {
      this.isAdmin = data;
    });

  }

  public switchNavBar (): void {

    this.navBar = this.users.isLogged();
    this.isAdmin = this.users.isAdmin();

  }

  public search (): void {

    this.route.navigate([`/search/${this.input}/1`]);

  }

  public logout () {
    this.users.logout();
    this.notify.success('you are disconnected', this.notifyConfig);
    this.users.change();
    this.route.navigate([`/`]);
  }

}
