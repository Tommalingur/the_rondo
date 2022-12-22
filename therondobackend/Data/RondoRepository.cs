using therondoAPI.Models;

namespace therondoAPI.Data
{
    public class RondoRepository
    {

        private RondoDbContext _dbContext;

        public RondoRepository()
        {
            _dbContext = new RondoDbContext();
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.Users.ToList();
        }


    }
}
