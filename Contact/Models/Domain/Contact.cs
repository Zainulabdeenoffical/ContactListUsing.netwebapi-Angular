namespace Contact.Models.Domain
{
    public class Contact
    {
        public Guid ID { get; set; }

        public required String  Name { get; set; }

        public string? Email { get; set; }

        public  required string PhoneNumber { get; set; }

        public bool favouriteContact { get; set; }


    }
}
