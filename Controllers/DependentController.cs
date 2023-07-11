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

        private readonly IDependentService _dependentService;

        public DependentController(IDependentService dependentService){
            this._dependentService = dependentService;
        }

        // GET: api/Dependent
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<GetDependentDto>>> GetDependents()
        {
          return Ok(await _dependentService.GetAllDependents());
        }

        // GET: api/Dependent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetDependentDto>>> GetDependent(int id)
        {
           return Ok(await _dependentService.GetDependentById(id));
        }

        // PUT: api/Dependent/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        // public IActionResult PutDependent(int id, Dependent dependent)
        // {
        //   return 
        // }

        // POST: api/Dependent
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<GetDependentDto>>>> AddDependent(AddDependentDto newDependent)
         {

                return Ok(await _dependentService.AddDependent(newDependent));
         }

        // DELETE: api/Dependent/5
        [HttpDelete("{id}")]
        public void DeleteDependent(int id)
        {
           
        }

      
    }
}
