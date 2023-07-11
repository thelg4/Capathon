namespace Capathon.Services.AppointmentService
{
    public interface IAppointmentService
    {
        List<Appointment> GetAllAppointments();

        Appointment GetAppointmentById(int id);

        List<Appointment> AddAppointment(Appointment newAppointment);
    }
}