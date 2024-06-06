﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VICTORUM.Context;

#nullable disable

namespace VICTORUM.Migrations
{
    [DbContext(typeof(TechSchool))]
    [Migration("20240606200015_Db_v1")]
    partial class Db_v1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("VICTORUM.Domain.AlunoDomain", b =>
                {
                    b.Property<Guid>("IdAluno")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdTurma")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("RA")
                        .HasColumnType("VARCHAR(200)");

                    b.HasKey("IdAluno");

                    b.HasIndex("IdTurma");

                    b.HasIndex("IdUsuario")
                        .IsUnique();

                    b.ToTable("Alunos");
                });

            modelBuilder.Entity("VICTORUM.Domain.FaltaDomain", b =>
                {
                    b.Property<Guid>("IdFalta")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateOnly>("DataFalta")
                        .HasColumnType("DATE");

                    b.Property<bool?>("Falta")
                        .HasColumnType("BIT");

                    b.Property<Guid>("IdAluno")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdMateria")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdFalta");

                    b.HasIndex("IdAluno");

                    b.HasIndex("IdMateria");

                    b.ToTable("Faltas");
                });

            modelBuilder.Entity("VICTORUM.Domain.MateriaDomain", b =>
                {
                    b.Property<Guid>("IdMateria")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Materia")
                        .IsRequired()
                        .HasColumnType("VARCHAR(50)");

                    b.HasKey("IdMateria");

                    b.ToTable("Materias");
                });

            modelBuilder.Entity("VICTORUM.Domain.ProfessorDomain", b =>
                {
                    b.Property<Guid>("IdProfessor")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdMateria")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdProfessor");

                    b.HasIndex("IdMateria");

                    b.HasIndex("IdUsuario")
                        .IsUnique();

                    b.ToTable("Professores");
                });

            modelBuilder.Entity("VICTORUM.Domain.TurmaDomain", b =>
                {
                    b.Property<Guid>("IdTurma")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Turma")
                        .IsRequired()
                        .HasColumnType("VARCHAR(20)");

                    b.HasKey("IdTurma");

                    b.ToTable("Turmas");
                });

            modelBuilder.Entity("VICTORUM.Domain.TurmaMateriaDomain", b =>
                {
                    b.Property<Guid>("IdTurmaMateria")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdMateria")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdTurma")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdTurmaMateria");

                    b.HasIndex("IdMateria");

                    b.HasIndex("IdTurma");

                    b.ToTable("TurmasMaterias");
                });

            modelBuilder.Entity("VICTORUM.Domain.UsuarioDomain", b =>
                {
                    b.Property<Guid>("IdUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<short?>("CodRecupSenha")
                        .HasColumnType("SMALLINT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Foto")
                        .HasColumnType("VARCHAR(200)");

                    b.Property<string>("Nome")
                        .HasColumnType("VARCHAR(200)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("VARCHAR(200)");

                    b.Property<Guid?>("TipoUsuarioId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdUsuario");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("TipoUsuarioId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("VICTORUM.Domains.TiposUsuarioDomain", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("TipoUsuario")
                        .HasColumnType("VARCHAR(200)");

                    b.HasKey("Id");

                    b.ToTable("TiposUsuario");
                });

            modelBuilder.Entity("VICTORUM.Domain.AlunoDomain", b =>
                {
                    b.HasOne("VICTORUM.Domain.TurmaDomain", "Turma")
                        .WithMany("Alunos")
                        .HasForeignKey("IdTurma")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VICTORUM.Domain.UsuarioDomain", "Usuario")
                        .WithOne("Aluno")
                        .HasForeignKey("VICTORUM.Domain.AlunoDomain", "IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Turma");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("VICTORUM.Domain.FaltaDomain", b =>
                {
                    b.HasOne("VICTORUM.Domain.AlunoDomain", "Aluno")
                        .WithMany()
                        .HasForeignKey("IdAluno")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VICTORUM.Domain.MateriaDomain", "Materia")
                        .WithMany()
                        .HasForeignKey("IdMateria")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aluno");

                    b.Navigation("Materia");
                });

            modelBuilder.Entity("VICTORUM.Domain.ProfessorDomain", b =>
                {
                    b.HasOne("VICTORUM.Domain.MateriaDomain", "Materia")
                        .WithMany()
                        .HasForeignKey("IdMateria")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VICTORUM.Domain.UsuarioDomain", "Usuario")
                        .WithOne("Professor")
                        .HasForeignKey("VICTORUM.Domain.ProfessorDomain", "IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Materia");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("VICTORUM.Domain.TurmaMateriaDomain", b =>
                {
                    b.HasOne("VICTORUM.Domain.MateriaDomain", "Materia")
                        .WithMany()
                        .HasForeignKey("IdMateria")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("VICTORUM.Domain.TurmaDomain", "Turma")
                        .WithMany()
                        .HasForeignKey("IdTurma")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Materia");

                    b.Navigation("Turma");
                });

            modelBuilder.Entity("VICTORUM.Domain.UsuarioDomain", b =>
                {
                    b.HasOne("VICTORUM.Domains.TiposUsuarioDomain", "TiposUsuario")
                        .WithMany("Usuarios")
                        .HasForeignKey("TipoUsuarioId");

                    b.Navigation("TiposUsuario");
                });

            modelBuilder.Entity("VICTORUM.Domain.TurmaDomain", b =>
                {
                    b.Navigation("Alunos");
                });

            modelBuilder.Entity("VICTORUM.Domain.UsuarioDomain", b =>
                {
                    b.Navigation("Aluno");

                    b.Navigation("Professor");
                });

            modelBuilder.Entity("VICTORUM.Domains.TiposUsuarioDomain", b =>
                {
                    b.Navigation("Usuarios");
                });
#pragma warning restore 612, 618
        }
    }
}