import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule,AsyncPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  htpp = inject(HttpClient);
  contacts$ = this.getContacts();

  ContactForm = new FormGroup({
    name:new FormControl<String>(''),
    email:new FormControl<String | null>('Null'),
    phoneNumber:new FormControl <String>(''),
    favouriteContact: new FormControl <boolean>(false)

  })

  onFormSubmint()
  {
    console.log(this.ContactForm.value)
  }

  private getContacts():Observable<Contact[]>
  {
    return   this.htpp.get<Contact[]>('https://localhost:7268/api/Contacts');
  }
}



