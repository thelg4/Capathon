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
    public class DependentController : ControllerBase
    {
        private readonly CapathonBroadwayContext _context;

        public DependentController(CapathonBroadwayContext context)
        {
            _context = context;
        }

        // GET: api/Dependent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dependent>>> GetDependents()
        {
          if (_context.Dependents == null)
          {
              return NotFound();
          }
            return await _context.Dependents.ToListAsync();
        }

        // GET: api/Dependent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dependent>> GetDependent(int id)
        {
          if (_context.Dependents == null)
          {
              return NotFound();
          }
            var dependent = await _context.Dependents.FindAsync(id);

            if (dependent == null)
            {
                return NotFound();
            }

            return dependent;
        }

        // PUT: api/Dependent/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDependent(int id, Dependent dependent)
        {
            if (id != dependent.DId)
            {
                return BadRequest();
            }

            _context.Entry(dependent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DependentExists(id))
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

        // POST: api/Dependent
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Dependent>> PostDependent(Dependent dependent)
        {
          if (_context.Dependents == null)
          {
              return Problem("Entity set 'CapathonBroadwayContext.Dependents'  is null.");
          }
            _context.Dependents.Add(dependent);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DependentExists(dependent.DId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDependent", new { id = dependent.DId }, dependent);
        }

        // DELETE: api/Dependent/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDependent(int id)
        {
            if (_context.Dependents == null)
            {
                return NotFound();
            }
            var dependent = await _context.Dependents.FindAsync(id);
            if (dependent == null)
            {
                return NotFound();
            }

            _context.Dependents.Remove(dependent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DependentExists(int id)
        {
            return (_context.Dependents?.Any(e => e.DId == id)).GetValueOrDefault();
        }
    }
}
