using therondoAPI.Models;

namespace therondoAPI.Data.Interfaces
{
    public interface IRondoRepository
    {
        List<Admin> GetAllAdmins();
        List<Article> GetAllArticles();
        List<User> GetAllUsers();

    }
}
