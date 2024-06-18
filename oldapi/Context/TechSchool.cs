﻿using Microsoft.EntityFrameworkCore;
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
            optionsBuilder.UseSqlServer("Server = NOTE11-SALA21; DataBase = TecschoolBD; User Id = sa; Pwd = Senai@134; TrustServerCertificate = true");
            base.OnConfiguring(optionsBuilder);
        }
    }
}