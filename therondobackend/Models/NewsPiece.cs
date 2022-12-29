using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class NewsPiece
    {
        public NewsPiece()
        {

            CreatedDate = DateTime.Now;
        }
        public int NewsPieceId { get; set; }
        [MaxLength(255)]
        public string? HeadLine { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }
        public DateTime CreatedDate { get; set; }
        public int AdminId { get; set; }
        public Admin? Admin { get; set; }
    }
}
