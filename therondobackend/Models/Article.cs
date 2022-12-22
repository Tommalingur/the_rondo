using System.ComponentModel.DataAnnotations;
using therondoAPI.Controllers;

namespace therondoAPI.Models
{
    public class Article
    {
        public Article()
        {
            Admin = new Admin();
        }
        public int ArticleId { get; set; }
        [MaxLength(255)]
        public string? HeadLine { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }
        public int AdminId { get; set; }
        public Admin? Admin { get; set; }
    }
}
