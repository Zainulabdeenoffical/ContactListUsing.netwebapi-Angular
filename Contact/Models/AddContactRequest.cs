namespace Contact.Models
{
    public class AddContactRequest
    {
        public required String Name { get; set; }

        public string? Email { get; set; }

        public required string PhoneNumber { get; set; }

        public bool favouriteContact { get; set; }
    }
}
