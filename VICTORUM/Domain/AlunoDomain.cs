using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Aluno")]
    public class AlunoDomain
    {
        [Key]
        public Guid IdAluno { get; set; } = Guid.NewGuid();

        public Guid IdMateria { get; set; }

        [ForeignKey("IdMateria")]
        public MateriaDomain? Materia { get; set; }

    }
}
