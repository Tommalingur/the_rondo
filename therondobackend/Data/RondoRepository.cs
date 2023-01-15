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

        public void CreateUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
        }

        public List<Admin> GetAllAdmins()
        {
            return _dbContext.Admins.ToList();
        }

        public List<Article> GetAllArticles()
        {
            return _dbContext.Articles.ToList();
        }

        public List<NewsPiece> GetAllNews()
        {
            return _dbContext.NewsPieces.ToList();
        }

        public Article? GetArticleById(int id)
        {
            return _dbContext.Articles.Where(t => t.ArticleId == id).FirstOrDefault();
        }

        public NewsPiece? GetNewsById(int id)
        {
            return _dbContext.NewsPieces.Where(t => t.NewsPieceId == id).FirstOrDefault();
        }

        public List<Comment> GetAllComments()
        {
            return _dbContext.Comments.ToList();
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.Users.ToList();
        }
        public User? GetUserById(int id)
        {
            return _dbContext.Users.Where(t => t.UserId == id).FirstOrDefault();
        }

        public void CreateArticle(Article article)
        {
            _dbContext.Articles.Add(article);
            _dbContext.SaveChanges();
        }
        public void CreateNewsPiece(NewsPiece newsPiece)
        {
            _dbContext.NewsPieces.Add(newsPiece);
            _dbContext.SaveChanges();
        }
    }
}
