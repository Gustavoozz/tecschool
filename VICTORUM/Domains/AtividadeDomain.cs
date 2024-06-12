using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VICTORUM.Domain;

namespace VICTORUM.Domains
{
    [Table("Atividade")]
    public class AtividadeDomain
    {
        [Key]
        public Guid IdAtividade { get; set; } = Guid.NewGuid();
        [Column(TypeName = "VARCHAR(200)")]
        public string? Titulo { get; set; }
        [Column(TypeName = "VARCHAR(200)")]
        public string? Descricao { get; set; }
        public Guid IdUsuario { get; set; }
        [ForeignKey("IdUsuario")]
        public UsuarioDomain? Usuario { get; set; }
        public Guid IdMateria { get; set; } 
        [ForeignKey("IdMateria")]
        public MateriaDomain? Materia { get; set; }
        [Column(TypeName="DATE")]
        public DateTime DataAtividade {  get; set; }
        [Column(TypeName="BIT")]
        public bool? Status { get; set; }
    }
}
