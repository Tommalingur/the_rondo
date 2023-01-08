using System.ComponentModel.DataAnnotations;
using therondoAPI.Controllers;

namespace therondoAPI.Models
{
    public class Article
    {
        private DateTime createdDate;

        public Article()
        {

            CreatedDate = DateTime.Now;
        }
        public int ArticleId { get; set; }
        [MaxLength(255)]
        public string? HeadLine { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
        public string? ArticleImgUrl { get; set; }
        public int AdminId { get; set; }
        public Admin? Admin { get; set; }
    }
}
