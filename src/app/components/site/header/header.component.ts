import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public menuIsActive: boolean = false;
  public menuSubActive: boolean = false;
  public logged: any = null;
  public user: any = null;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.logged = window.localStorage.getItem('user');
      this.user = this.logged ? JSON.parse(this.logged) : null;
    }
  }

  toggleMenu() {
    this.menuIsActive = !this.menuIsActive;
  }

  toggleSubMenu() {
    this.menuSubActive = !this.menuSubActive;
  }
}
