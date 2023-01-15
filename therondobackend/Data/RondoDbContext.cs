using Microsoft.EntityFrameworkCore;
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
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            Admin a1 = new Admin { AdminId = 1, FirstName = "Tómas", LastName = "Gunnarsson", UserName = "TomDaBum", Password = "RosaGottPW" };

            modelBuilder.Entity<Admin>().HasData(a1);

            User u1 = new User { UserId = 1, FirstName = "Usain", LastName = "Bolt", UserName = "2Fast", Password = "Hlaupagikkur" };

            modelBuilder.Entity<User>().HasData(u1);

            Article ar1 = new Article { ArticleId = 1, HeadLine = "The Rondo is in the air!", Content = "The Rondo is a new site with news and articles related to the beautiful game. It is now officially open for business. Be sure to check in daily for new content!"};

            modelBuilder.Entity<Article>().HasData(ar1);

            NewsPiece n1 = new NewsPiece { NewsPieceId = 1, HeadLine = "The Rondo also has news pieces", Content = "Not only does The Rondo have articles about everything from tactics and football history to upcoming stars and opinions of our team of writers. We will also keep tabs of news from around the globe so you can get all your football content in one place!"};

            modelBuilder.Entity<NewsPiece>().HasData(n1);

        }
    }
}
