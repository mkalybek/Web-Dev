import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
// import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hh_front';
}
