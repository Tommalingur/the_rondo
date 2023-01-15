using Microsoft.AspNetCore.Mvc;
using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Controllers
{
    [Route("api")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private IRondoRepository _repo;
        public ArticlesController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("articles")]
        public List<Article> GetAllArticles()
        {
            return _repo.GetAllArticles();
        }

        [HttpGet]
        [Route("articles/{id}")]
        public ActionResult<Article> GetArticleById(int id)
        {
            Article? article = _repo.GetArticleById(id);

            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [HttpPost]
        [Route("articles")]
        public ActionResult<Article> CreateArticle(Article article)
        {
            _repo.CreateArticle(article);

            return CreatedAtAction(nameof(GetArticleById), new { id = article.ArticleId }, article);
        }
    }
}
