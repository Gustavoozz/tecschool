using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Turmas")]
    public class TurmaDomain
    {

            [Key]
            public Guid IdTurma { get; set; } = Guid.NewGuid();

            [Column(TypeName = "VARCHAR(20)")]
            [Required(ErrorMessage = "A Turma é obrigatória!")]
            public string? Turma { get; set; }


        public List<AlunoDomain>? Alunos { get; set; }

    }
}
