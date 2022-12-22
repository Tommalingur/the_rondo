using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class Admin
    {

        public Admin()
        {
            Articles = new List<Article>();
            NewsPieces = new List<NewsPiece>();
        }
        public int AdminId { get; set; }
        [MaxLength(255)]
        public string? FirstName { get; set; }
        [MaxLength(255)]
        public string? LastName { get; set; }
        public List<Article> Articles { get; set; }
        public List<NewsPiece> NewsPieces { get; set; }
    }
}
