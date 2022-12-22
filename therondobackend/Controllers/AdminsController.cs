using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private MockRepository _repo;

        public AdminsController()
        {
            _repo = new MockRepository();
        }

        [HttpGet]

        public List<Admin> GetAllAdmins()
        {
            return _repo.GetAllAdmins();
        }
    }
}
