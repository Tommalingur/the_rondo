using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class Comment
    {
        public Comment()
        {
            User = new User();
        }
        public int CommentId { get; set; }
        [MaxLength(255)]
        public string? Content { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
