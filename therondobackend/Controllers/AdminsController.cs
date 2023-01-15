using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class AdminsController : ControllerBase
    {
        private IRondoRepository _repo;
        public AdminsController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("admins")]
        public List<Admin> GetAllAdmins()
        {
            return _repo.GetAllAdmins();
        }
    }
}
