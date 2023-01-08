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
    public class ArticlesController : ControllerBase
    {
        private IRondoRepository _repo;
        public ArticlesController(IRondoRepository repo)
        {
            _repo = repo;
        }

        [EnableCors("CorsPolicy")]
        [HttpGet]
        [Route("articles")]
        public List<Article> GetAllArticles()
        {
            return _repo.GetAllArticles();
        }

        [HttpGet]
        [Route("articles/{id}")]
        [EnableCors("CorsPolicy")]
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
        [EnableCors("CorsPolicy")]
        public ActionResult<Article> CreateArticle(Article article)
        {
            _repo.CreateArticle(article);

            return CreatedAtAction(nameof(GetArticleById), new { id = article.ArticleId }, article);
        }
    }
}
