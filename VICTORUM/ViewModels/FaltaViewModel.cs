namespace VICTORUM.ViewModels
{
    public class FaltaViewModel
    {
        public bool? Falta { get; set; }
        public Guid IdMateria { get; set; }
        public Guid IdAluno { get; set; }
        public DateTime DataFalta { get; set; } = new DateTime();
    }
}
