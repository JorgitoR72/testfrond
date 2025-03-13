import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterhomeComponent } from '../../../components/site/footer/footerhome/footerhome.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterhomeComponent, NgxTypedJsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
