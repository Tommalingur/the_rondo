using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;
using EnableCorsAttribute = Microsoft.AspNetCore.Cors.EnableCorsAttribute;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private IRondoRepository _repo;

        public AdminsController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("admins")]
        public List<Admin> GetAllAdmins()
        {
            return _repo.GetAllAdmins();
        }
    }
}
