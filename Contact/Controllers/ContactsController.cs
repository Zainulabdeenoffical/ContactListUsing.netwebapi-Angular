using Contact.Data;
using Contact.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Contact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ContactListDbContexts dbContexts;

        public ContactsController(ContactListDbContexts dbContexts)
        {
            this.dbContexts = dbContexts;
        }

        [HttpGet]

        public IActionResult GetAllContatcs()
        {
            var contacts = dbContexts.contacts.ToList();
            return Ok(contacts);
        }

        [HttpPost]
        public IActionResult addContact(AddContactRequest request)
        {
            var domainModelContact = new Contact.Models.Domain.Contact
            {
                ID = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                favouriteContact = request.favouriteContact,

            };

            dbContexts.contacts.Add(domainModelContact);
            dbContexts.SaveChanges();
            return Ok(domainModelContact);
        }

        [HttpDelete]
        [Route("{ID=Guid}")]
        public IActionResult deleteContact (Guid ID)
        {
           var contact =  dbContexts.contacts.Find(ID);
            if (contact is not null)
            {
                dbContexts.contacts.Remove(contact);
                dbContexts.SaveChanges();
            }
            return Ok();


        }
    }
}
