using System.ComponentModel.DataAnnotations;
using therondoAPI.Controllers;

namespace therondoAPI.Models
{
    public class Article
    {
        public Article()
        {

            CreatedDate = DateTime.Now;
        }
        public int ArticleId { get; set; }
        [MaxLength(255)]
        public string? HeadLine { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }
        public int AdminId { get; set; }

        public DateTime CreatedDate { get; set; }
        public Admin Admin { get; set; }
    }
}
