using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class Admin
    {
        public Admin()
        {
        }
        public int AdminId { get; set; }
        [MaxLength(255)]
        public string? FirstName { get; set; }
        [MaxLength(255)]
        public string? LastName { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
        public List<Article> Articles { get; set; }
        public List<NewsPiece> NewsPieces { get; set; }
    }
}
