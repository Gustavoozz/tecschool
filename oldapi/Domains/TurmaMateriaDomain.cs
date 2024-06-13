using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("TurmasMaterias")]
    public class TurmaMateriaDomain
    {
        [Key]
        public Guid IdTurmaMateria { get; set; } = Guid.NewGuid();

        public Guid IdTurma { get; set; }

        [ForeignKey("IdTurma")]
        public TurmaDomain? Turma { get; set; }

        public Guid IdMateria { get; set; }

        [ForeignKey("IdMateria")]
        public MateriaDomain? Materia { get; set; }
    }
}
