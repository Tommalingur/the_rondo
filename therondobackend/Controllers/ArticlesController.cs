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
    }
}
