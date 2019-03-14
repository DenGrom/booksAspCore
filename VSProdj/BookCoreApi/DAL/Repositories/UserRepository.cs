using DAL.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class UserRepository
    {
        private ApplicationContext _context;
        public UserRepository(ApplicationContext context)
        {
            _context = context;

        }

        public async Task<List<User>> GetBooks()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }
    }
}
