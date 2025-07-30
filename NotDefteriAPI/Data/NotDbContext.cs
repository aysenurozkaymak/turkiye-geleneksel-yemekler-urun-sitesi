using Microsoft.EntityFrameworkCore;
using NotDefteriAPI.Models;

namespace NotDefteriAPI.Data
{
    public class NotDbContext : DbContext
    {
        public NotDbContext(DbContextOptions<NotDbContext> options) : base(options) { }

        public DbSet<Not> Notlar { get; set; }
    }
}
