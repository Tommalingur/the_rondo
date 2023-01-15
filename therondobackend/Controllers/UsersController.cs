using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;


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

        public List<User> GetAllUsers()
        {
            return _repo.GetAllUsers();
        }

        [HttpGet]
        [Route("users/{id}")]
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
        public ActionResult<User> CreateUser(User user)
        {
            _repo.CreateUser(user);

            return CreatedAtAction(nameof(GetUserById), new { id = user.UserId }, user);
        }

    }
}
