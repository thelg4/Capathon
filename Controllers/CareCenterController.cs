using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capathon.Models;

namespace Capathon
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareCenterController : ControllerBase
    {
        private readonly CapathonBroadwayContext _context;

        public CareCenterController(CapathonBroadwayContext context)
        {
            _context = context;
        }

        // GET: api/CareCenter
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CareCenter>>> GetCareCenters()
        {
          if (_context.CareCenters == null)
          {
              return NotFound();
          }
            return await _context.CareCenters.ToListAsync();
        }

        // GET: api/CareCenter/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CareCenter>> GetCareCenter(int id)
        {
          if (_context.CareCenters == null)
          {
              return NotFound();
          }
            var careCenter = await _context.CareCenters.FindAsync(id);

            if (careCenter == null)
            {
                return NotFound();
            }

            return careCenter;
        }

        // PUT: api/CareCenter/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCareCenter(int id, CareCenter careCenter)
        {
            if (id != careCenter.CId)
            {
                return BadRequest();
            }

            _context.Entry(careCenter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CareCenterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CareCenter
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CareCenter>> PostCareCenter(CareCenter careCenter)
        {
          if (_context.CareCenters == null)
          {
              return Problem("Entity set 'CapathonBroadwayContext.CareCenters'  is null.");
          }
            _context.CareCenters.Add(careCenter);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CareCenterExists(careCenter.CId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCareCenter", new { id = careCenter.CId }, careCenter);
        }

        // DELETE: api/CareCenter/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCareCenter(int id)
        {
            if (_context.CareCenters == null)
            {
                return NotFound();
            }
            var careCenter = await _context.CareCenters.FindAsync(id);
            if (careCenter == null)
            {
                return NotFound();
            }

            _context.CareCenters.Remove(careCenter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CareCenterExists(int id)
        {
            return (_context.CareCenters?.Any(e => e.CId == id)).GetValueOrDefault();
        }
    }
}
