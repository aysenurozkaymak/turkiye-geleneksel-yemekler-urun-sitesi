using Microsoft.AspNetCore.Mvc;
using NotDefteriAPI.Models;
using NotDefteriAPI.Data;

namespace NotDefteriAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotController : ControllerBase
    {
        private readonly NotDbContext _context;
        public NotController(NotDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> NotEkle([FromBody] Not yeniNot)
        {
            _context.Notlar.Add(yeniNot);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public IActionResult NotlariGetir()
        {
            var notlar = _context.Notlar.OrderByDescending(n => n.Tarih).ToList();
            return Ok(notlar);
        }
    }
}
