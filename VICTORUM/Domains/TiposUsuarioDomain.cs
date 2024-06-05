using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VICTORUM.Domain;

namespace VICTORUM.Domains
{
    [Table("TiposUsuario")]
    public class TiposUsuarioDomain
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Column("VARCHAR(200)")]
        public string? TipoUsuario { get; set; }

        public virtual ICollection<UsuarioDomain> Usuarios { get; set; } = new List<UsuarioDomain>();
    }
}
