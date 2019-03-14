using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL.Entity;
using DAL.Entity.Enums;
using DAL.Repositories;
using DAL;

namespace BookCoreApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private BookRepository _bookRepository;

        public ValuesController(ApplicationContext context)
        {
            _bookRepository = new BookRepository(context);
        }
        // GET api/values
        [HttpGet]
        public List<Book> Get()
        {
            var book = _bookRepository.GetBooks().Result;
            var books = new List<Book>();
            //var book = new Book();
            //book.Id = 1;
            //book.Author = "Flagan David";
            //book.CountPage = 320;
            //book.Currency = "gr";
            //book.Description = "JavaScript is one of the most popular programming languages. Used to write scripts of interactive web pages for more than fifteen years. The book JavaScript: Pocket Guide provides the most important and useful information about the syntax of the JavaScript language. Many examples of practical use, data types, values and variables.";
            //book.Language = "Rush";
            //book.Name = "JavaScript: pocket guide";
            //book.Price = 313.00m;
            //book.UrlPic = "http://books.ua/Product/GetBigImage?code_wares=228093";
            //book.BookType = BookType.Computer;
            //book.BookSubType = BookSubType.Programming;
            books.AddRange(book);
            return books;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public List<Book> Get(int id)
        {
            return Get();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
