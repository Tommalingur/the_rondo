using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private IRondoRepository _repo;
        public NewsController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("news")]
        public List<NewsPiece> GetAllNews()
        {
            return _repo.GetAllNews();
        }

        [HttpGet]
        [Route("news/{id}")]
        public ActionResult<NewsPiece> GetNewsById(int id)
        {
            NewsPiece? news = _repo.GetNewsById(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        [HttpPost]
        [Route("news")]
        public ActionResult<NewsPiece> CreateNews(NewsPiece newsPiece)
        {
            _repo.CreateNewsPiece(newsPiece);

            return CreatedAtAction(nameof(GetNewsById), new { id = newsPiece.NewsPieceId }, newsPiece);
        }
    }
}
