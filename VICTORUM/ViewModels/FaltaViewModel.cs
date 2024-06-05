namespace VICTORUM.ViewModels
{
    public class FaltaViewModel
    {
        public bool? Falta { get; set; }
        public Guid IdMateria { get; set; }
        public Guid IdAluno { get; set; }
        public DateOnly DataFalta { get; set; } = new DateOnly();
    }
}
