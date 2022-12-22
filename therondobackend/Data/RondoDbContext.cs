using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using therondoAPI.Models;

namespace therondoAPI.Data
{
    public class RondoDbContext : DbContext
    {

        public DbSet<Admin> Admins { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<NewsPiece> NewsPieces { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=RondoDB");
        }
    }
}
