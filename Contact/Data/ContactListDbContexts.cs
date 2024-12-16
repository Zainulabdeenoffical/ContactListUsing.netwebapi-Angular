using Contact.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Contact.Data
{
    public class ContactListDbContexts : DbContext
    {
        public ContactListDbContexts(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contact.Models.Domain.Contact> contacts { get; set; }
    }
}

