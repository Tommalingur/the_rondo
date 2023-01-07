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
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Admin a1 = new Admin { AdminId = 1, FirstName = "Tómas", LastName = "Gunnarsson", UserName = "Tommi_Admin", Password = "SafePW" };

            modelBuilder.Entity<Admin>().HasData(a1);

            Article ar1 = new Article { ArticleId = 1, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome article 1", Content = "Awesome article text 1" };
            Article ar2 = new Article { ArticleId = 2, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome article 2", Content = "Awesome article text 2" };
            Article ar3 = new Article { ArticleId = 3, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome article 3", Content = "Awesome article text 3" };

            modelBuilder.Entity<Article>().HasData(ar1);
            modelBuilder.Entity<Article>().HasData(ar2);
            modelBuilder.Entity<Article>().HasData(ar3);

            NewsPiece n1 = new NewsPiece { NewsPieceId = 1, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome news 1", Content = "Awesome news text 1" };
            NewsPiece n2 = new NewsPiece { NewsPieceId = 2, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome news 2", Content = "Awesome news text 2" };
            NewsPiece n3 = new NewsPiece { NewsPieceId = 3, AdminId = 1, CreatedDate = DateTime.Now, HeadLine = "Awesome news 3", Content = "Awesome news text 3" };

            modelBuilder.Entity<NewsPiece>().HasData(n1);
            modelBuilder.Entity<NewsPiece>().HasData(n2);
            modelBuilder.Entity<NewsPiece>().HasData(n3);

            User u1 = new User { UserId = 1, FirstName = "TheFirst", LastName = "Avenger" };

            modelBuilder.Entity<User>().HasData(u1);
        }
    }
}
