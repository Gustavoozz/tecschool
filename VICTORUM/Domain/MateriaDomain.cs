using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Materia")]
    public class MateriaDomain
    {
        [Key]
        public Guid IdMateria { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(50)")]
        [Required(ErrorMessage = "A matéria é obrigatória!")]
        public string? Materia { get; set; }
    }
}
