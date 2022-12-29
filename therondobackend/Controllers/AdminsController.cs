using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api/admins")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private IRondoRepository _repo;

        public AdminsController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]

        public List<Admin> GetAllAdmins()
        {
            return _repo.GetAllAdmins();
        }
    }
}
