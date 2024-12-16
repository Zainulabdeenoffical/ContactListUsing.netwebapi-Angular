using Contact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
         var contacts =  dbContexts.contacts.ToList();
            return Ok(contacts);
        }
    }
}
