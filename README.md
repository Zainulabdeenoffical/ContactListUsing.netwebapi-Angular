# Contact List Application

This repository contains a **Contact List Application** built using **.NET Web API** for the backend and **Angular** for the frontend. The application allows users to manage contacts efficiently, including features like adding, editing, deleting, and viewing contact details.

---

## Features

- **Add Contact**: Add new contacts with details like name, phone number, and email.
- **Edit Contact**: Update the details of existing contacts.
- **Delete Contact**: Remove contacts from the list.
- **View Contacts**: Display all contacts in a user-friendly interface.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used

### Backend:
- **.NET Web API**: RESTful API to handle CRUD operations.
- **Entity Framework**: For database interactions.
- **SQL Server**: As the database for storing contact information.

### Frontend:
- **Angular**: For building a dynamic and responsive user interface.
- **Bootstrap**: For styling the application.

---

## Getting Started

### Prerequisites
- **.NET 6 SDK**
- **Node.js** (LTS version recommended)
- **Angular CLI**
- **SQL Server**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Zainulabdeenoffical/ContactListUsing.netwebapi-Angular.git
   cd ContactListUsing.netwebapi-Angular
   ```

2. **Set up the backend**:
   - Navigate to the `Backend` folder:
     ```bash
     cd Backend
     ```
   - Restore dependencies:
     ```bash
     dotnet restore
     ```
   - Update the `appsettings.json` file with your SQL Server connection string.
   - Apply migrations to the database:
     ```bash
     dotnet ef database update
     ```
   - Run the backend server:
     ```bash
     dotnet run
     ```

3. **Set up the frontend**:
   - Navigate to the `Frontend` folder:
     ```bash
     cd Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the Angular development server:
     ```bash
     ng serve
     ```
   - Open the application in your browser at `http://localhost:4200`.

---

## Folder Structure

```
ContactListUsing.netwebapi-Angular/
├── Backend/         # .NET Web API Backend
├── Frontend/        # Angular Frontend
├── README.md        # Project Documentation
```

---

## API Endpoints

- **GET /api/contacts**: Retrieve all contacts.
- **GET /api/contacts/{id}**: Retrieve a contact by ID.
- **POST /api/contacts**: Add a new contact.
- **PUT /api/contacts/{id}**: Update an existing contact.
- **DELETE /api/contacts/{id}**: Delete a contact.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or feedback, feel free to reach out:
- **GitHub**: [Zainulabdeenofficial](https://github.com/Zainulabdeenoffical)
- **Email**: [zu4425@gmail.com](mailto:zu4425@example.com)

---

Happy coding! ✨
