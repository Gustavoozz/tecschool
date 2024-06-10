using Microsoft.EntityFrameworkCore;
using VICTORUM.Domain;

namespace VICTORUM.Context
{
    public class TechSchool : DbContext
    {
        public DbSet<AlunoDomain> Aluno { get; set; }
        public DbSet<UsuarioDomain> Usuario { get; set; }
        public DbSet<ProfessorDomain> Professor { get; set; }
        public DbSet<MateriaDomain> Materia { get; set; }
        public DbSet<FaltaDomain> Falta { get; set; }
        public DbSet<TurmaDomain> Turma { get; set; }
        public DbSet<TurmaMateriaDomain> TurmaMateria { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
<<<<<<< HEAD
            optionsBuilder.UseSqlServer("Server = NOTE07-S21; DataBase = DataBaseSchool; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true");
=======
            optionsBuilder.UseSqlServer("Server = NOTE11-SALA21; DataBase = TecschoolBD; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true");
>>>>>>> d81b31c0c07cca5124980c1976e1857a638e2f7a
            base.OnConfiguring(optionsBuilder);
        }
    }
}
