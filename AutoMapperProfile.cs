using AutoMapper;

namespace Capathon
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile(){
            CreateMap<Dependent,GetDependentDto>();
            CreateMap<AddDependentDto,Dependent>();
        }
    }
}