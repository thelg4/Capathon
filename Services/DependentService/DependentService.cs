using AutoMapper;

namespace Capathon.Services.DependentService
{
    public class DependentService : IDependentService
    {
         private static List<Dependent> dependents = new List<Dependent>{
            new Dependent(),
            new Dependent()
        };

        private readonly IMapper _mapper;
        private readonly CapathonBroadwayContext _dataContext;
        

        public DependentService(IMapper mapper, CapathonBroadwayContext dataContext)
        {
            _mapper = mapper;
            _dataContext = dataContext;
        }


        public async Task<ServiceResponse<List<GetDependentDto>>> AddDependent(AddDependentDto newDependent)
        {
            var serviceResponse = new ServiceResponse<List<GetDependentDto>>();
            var dbDependents = await _dataContext.Dependents.ToListAsync();
            dependents.Add(_mapper.Map<Dependent>(newDependent));
            serviceResponse.Data = dependents.Select(d => _mapper.Map<GetDependentDto>(d)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetDependentDto>>> GetAllDependents()
        {
            var serviceResponse = new ServiceResponse<List<GetDependentDto>>();
            var dbDependents = await _dataContext.Dependents.ToListAsync();
            serviceResponse.Data = dbDependents.Select(d => _mapper.Map<GetDependentDto>(d)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<GetDependentDto>> GetDependentById(int id)
        {

            var serviceResponse = new ServiceResponse<GetDependentDto>();
            var dependent = dependents.FirstOrDefault(d => d.DId == id);
            serviceResponse.Data = _mapper.Map<GetDependentDto>(dependent);
            return serviceResponse;
        }
    }
}