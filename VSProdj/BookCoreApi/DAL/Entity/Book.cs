using DAL.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Entity
{
    public class Book
    {
        public int Id { get; set; }
        public string UrlPic { get; set; } = "http://books.ua/Product/GetImage?code_wares=33755";
        public string Name { get; set; }
        public string Author { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }
        public string Currency { get; set; }
        public int CountPage { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }
        public BookType BookType { get; set; }
        public BookSubType BookSubType { get; set; }
    }
}
