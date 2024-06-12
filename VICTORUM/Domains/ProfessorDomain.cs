using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VICTORUM.Domain
{
    [Table("Professores")]
    public class ProfessorDomain
    {
        [Key]
        public Guid IdProfessor { get; set; } = Guid.NewGuid();

        public Guid IdMateria { get; set; }

        [ForeignKey("IdMateria")]
        public MateriaDomain? Materia { get; set; }

        [ForeignKey("IdUsuario")]
        public virtual UsuarioDomain? Usuario { get; set; }
        public Guid IdUsuario { get; set; }



        
    }
}
