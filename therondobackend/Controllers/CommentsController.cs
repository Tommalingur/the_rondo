using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private IRondoRepository _repo;
        public CommentsController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("comments")]
        public List<Comment> GetAllComments()
        {
            return _repo.GetAllComments();
        }
    }
}
