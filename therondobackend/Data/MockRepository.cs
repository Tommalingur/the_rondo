using therondoAPI.Models;

namespace therondoAPI.Data
{
    public class MockRepository
    {

        List<Admin> Admins = new List<Admin>()
        {
            new Admin() { AdminId = 1, FirstName = "Tómas", LastName = "Gunnarsson"},
            new Admin() { AdminId = 2, FirstName = "Kristinn", LastName = "Gunn"},
        };

        public List<Admin> GetAllAdmins()
        {
            return Admins;
        }

        List<Article> Articles = new List<Article>()
        {
            new Article() { ArticleId = 1, HeadLine = "The first article", Content = "The first article of this wonderful new webpage has been posted. This will be the first of many and hopefully I can get this shit to work!"},
            new Article() { ArticleId = 2, HeadLine = "The second article", Content = "Here comes the second article, this is hopefully working really well and now I can figure out how to post a new article straight from the admin page."},
        };

        public List<Article> GetAllArticles()
        {
            return Articles;
        }
    }
}
