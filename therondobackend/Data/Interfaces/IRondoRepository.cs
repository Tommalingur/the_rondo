using therondoAPI.Models;

namespace therondoAPI.Data.Interfaces
{
    public interface IRondoRepository
    {
        List<Admin> GetAllAdmins();
        List<Article> GetAllArticles();
        Article? GetArticleById(int id);
        List<User> GetAllUsers();
        User? GetUserById(int id);
        List<Comment> GetAllComments();

        void CreateUser(User user);
        void CreateArticle(Article article);

    }
}
