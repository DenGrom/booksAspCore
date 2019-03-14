using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entity;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class BookRepository
    {

        private ApplicationContext _context;
        public BookRepository(ApplicationContext context)
        {
            _context = context;

        }

        public async Task<List<Book>> GetBooks()
        {
            var books = await  _context.Books.ToListAsync();
            return books;
        }
    }
}
