using Capathon.Dtos.Dependent;

namespace Capathon.Services.DependentService
{
    public interface IDependentService
    {
         
        Task<ServiceResponse<List<GetDependentDto>>> GetAllDependents();

        Task<ServiceResponse<GetDependentDto>> GetDependentById(int id);

        Task<ServiceResponse<List<GetDependentDto>>> AddDependent(AddDependentDto newDependent);
    }
}