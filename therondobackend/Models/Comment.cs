using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class Comment
    {
        public Comment()
        {

            CreatedDate = DateTime.Now;
        }
        public int CommentId { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }

        public DateTime? CreatedDate { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
