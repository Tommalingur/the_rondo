using System.ComponentModel.DataAnnotations;

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
        public string? Content { get; set; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
    }
}
