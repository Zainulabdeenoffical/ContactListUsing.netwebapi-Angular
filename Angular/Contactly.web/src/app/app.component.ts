import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  htpp = inject(HttpClient);
  contacts$ = this.getContacts();

  private getContacts():Observable<Contact[]>
  {
    return   this.htpp.get<Contact[]>('https://localhost:7268/api/Contacts');
  }
}



