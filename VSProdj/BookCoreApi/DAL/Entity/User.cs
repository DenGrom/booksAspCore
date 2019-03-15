using DAL.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entity
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public UserRole UserRole { get; set; }
    }
}
