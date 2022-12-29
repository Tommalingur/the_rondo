using therondoAPI.Data.Interfaces;
using therondoAPI.Models;

namespace therondoAPI.Data
{
    public class RondoRepository : IRondoRepository
    {

        private RondoDbContext _dbContext;

        public RondoRepository()
        {
            _dbContext = new RondoDbContext();
        }

        public List<Admin> GetAllAdmins()
        {
            return _dbContext.Admins.ToList();
        }

        public List<Article> GetAllArticles()
        {
            return _dbContext.Articles.ToList();
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.Users.ToList();
        }


    }
}
