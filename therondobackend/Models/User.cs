using System.ComponentModel.DataAnnotations;

namespace therondoAPI.Models
{
    public class User
    {
        public User()
        {
            Comments = new List<Comment>();
        }
        public int UserId { get; set; }
        [MaxLength(255)]
        public string? FirstName { get; set; }
        [MaxLength(255)]
        public string? LastName { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
