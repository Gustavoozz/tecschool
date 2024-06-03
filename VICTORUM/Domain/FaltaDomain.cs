using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Globalization;



namespace VICTORUM.Domain
{
    [Table("Falta")]


    public class FaltaDomain
    {
        [Key]
        public Guid IdFalta { get; set; } = Guid.NewGuid();

        [Column(TypeName = "BIT")]
        public bool? Falta { get; set; }
        public Guid IdAluno { get; set; }

        [ForeignKey("IdAluno")]
        public AlunoDomain? Aluno { get; set; }
        public Guid IdMateria { get; set; }

        [ForeignKey("IdMateria")]
        public MateriaDomain? Materia { get; set; }

        [Column(TypeName = "DATE")]
        public DateOnly DataFalta { get; set; }
   
    }

}
