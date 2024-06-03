using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Alunos")]
    public class AlunoDomain
    {
        [Key]
        public Guid IdAluno { get; set; } = Guid.NewGuid();
        [Column(TypeName = "VARCHAR(200)")]
        public string? RA { get; set; }
        public Guid IdTurma { get; set; }
        [ForeignKey("IdTurma")]
        public TurmaDomain? Turma { get; set; }

    }
}
