using DAL.Entity;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DAL
{
    public class ApplicationContext : DbContext
    {
        //string connection = @"Server=.\sql2016;Database=BookNg;Trusted_Connection=True;ConnectRetryCount=0";
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        //public ApplicationContext() : base()
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}
