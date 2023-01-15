using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class NewsPiece
    {
        private DateTime createdDate;
        public NewsPiece()
        {

            CreatedDate = DateTime.Now;
        }
        public int NewsPieceId { get; set; }
        [MaxLength(255)]
        public string? HeadLine { get; set; }
        public string? Content { get; set; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
    }
}
