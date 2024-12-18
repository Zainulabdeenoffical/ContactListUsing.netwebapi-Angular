import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  htpp = inject(HttpClient); // HttpClient injection
  contacts$ = this.getContacts(); // Observable for fetching contacts

  // Define the reactive form with appropriate type annotations
  ContactForm = new FormGroup({
    name: new FormControl<string>(''), // Corrected type annotations
    email: new FormControl<string | null>(null),
    phoneNumber: new FormControl<string>(''),
    favouriteContact: new FormControl<boolean>(false),
  });

  // Method to handle form submission
  onFormSubmint() {
    const AddContactRequest = {
      name: this.ContactForm.value.name,
      email: this.ContactForm.value.email,
      phoneNumber: this.ContactForm.value.phoneNumber,
      favouriteContact: this.ContactForm.value.favouriteContact,
    };

    this.htpp.post('https://localhost:7268/api/Contacts', AddContactRequest).subscribe({
      next: (value) => {
        console.log(value);
        this.contacts$ = this.getContacts(); // Refresh the contact list
        this.ContactForm.reset(); // Reset the form
      },
      error: (err) => {
        console.error('Error adding contact:', err);
      },
    });
  }

  // Method to delete a contact
  OnDelete(id: string) {
    this.htpp.delete(`https://localhost:7268/api/Contacts/${id}`).subscribe({
      next: (value) => {
        alert('Item deleted');
        this.contacts$ = this.getContacts(); // Refresh the contact list
      },
      error: (err) => {
        console.error('Error deleting contact:', err);
      },
    });
  }

  // Method to fetch the list of contacts
  private getContacts(): Observable<Contact[]> {
    return this.htpp.get<Contact[]>('https://localhost:7268/api/Contacts');
  }
}



