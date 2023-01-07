using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;
using EnableCorsAttribute = Microsoft.AspNetCore.Cors.EnableCorsAttribute;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private IRondoRepository _repo;
        public UsersController(IRondoRepository repo)
        {
            _repo = repo;
        }

        
        [HttpGet]
        [Route("users")]
        [EnableCors("CorsPolicy")]

        public List<User> GetAllUsers()
        {
            return _repo.GetAllUsers();
        }

        [HttpGet]
        [Route("users/{id}")]
        [EnableCors("CorsPolicy")]
        public ActionResult<User> GetUserById(int id)
        {
            User? user = _repo.GetUserById(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPost]
        [Route("users")]
        [EnableCors("CorsPolicy")]
        public ActionResult<User> CreateUser(User user)
        {
            _repo.CreateUser(user);

            return CreatedAtAction(nameof(GetUserById), new { id = user.UserId }, user);
        }

    }
}
