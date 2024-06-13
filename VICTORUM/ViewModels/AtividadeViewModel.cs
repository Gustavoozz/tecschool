using System.ComponentModel.DataAnnotations.Schema;
using VICTORUM.Domain;

namespace VICTORUM.ViewModels
{
    public class AtividadeViewModel
    {
        public string? Titulo { get; set; }
        public string? Descricao { get; set; }
        public Guid IdMateria { get; set; }
        public DateTime DataAtividade { get; set; }
        public bool? Status { get; set; }
    }
}
