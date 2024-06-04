﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VICTORUM.Migrations
{
    /// <inheritdoc />
    public partial class Db_v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Materias",
                columns: table => new
                {
                    IdMateria = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Materia = table.Column<string>(type: "VARCHAR(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Materias", x => x.IdMateria);
                });

            migrationBuilder.CreateTable(
                name: "Turmas",
                columns: table => new
                {
                    IdTurma = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Materia = table.Column<string>(type: "VARCHAR(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turmas", x => x.IdTurma);
                });

            migrationBuilder.CreateTable(
                name: "Professores",
                columns: table => new
                {
                    IdProfessor = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdMateria = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professores", x => x.IdProfessor);
                    table.ForeignKey(
                        name: "FK_Professores_Materias_IdMateria",
                        column: x => x.IdMateria,
                        principalTable: "Materias",
                        principalColumn: "IdMateria",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Alunos",
                columns: table => new
                {
                    IdAluno = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdTurma = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alunos", x => x.IdAluno);
                    table.ForeignKey(
                        name: "FK_Alunos_Turmas_IdTurma",
                        column: x => x.IdTurma,
                        principalTable: "Turmas",
                        principalColumn: "IdTurma",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TurmasMaterias",
                columns: table => new
                {
                    IdTurmaMateria = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdTurma = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdMateria = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TurmasMaterias", x => x.IdTurmaMateria);
                    table.ForeignKey(
                        name: "FK_TurmasMaterias_Materias_IdMateria",
                        column: x => x.IdMateria,
                        principalTable: "Materias",
                        principalColumn: "IdMateria",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TurmasMaterias_Turmas_IdTurma",
                        column: x => x.IdTurma,
                        principalTable: "Turmas",
                        principalColumn: "IdTurma",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Faltas",
                columns: table => new
                {
                    IdFalta = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Falta = table.Column<bool>(type: "BIT", nullable: true),
                    IdMateria = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdAluno = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DataFalta = table.Column<DateOnly>(type: "DATE", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faltas", x => x.IdFalta);
                    table.ForeignKey(
                        name: "FK_Faltas_Alunos_IdAluno",
                        column: x => x.IdAluno,
                        principalTable: "Alunos",
                        principalColumn: "IdAluno",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Faltas_Materias_IdMateria",
                        column: x => x.IdMateria,
                        principalTable: "Materias",
                        principalColumn: "IdMateria",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Senha = table.Column<string>(type: "VARCHAR(200)", nullable: false),
                    Nome = table.Column<string>(type: "VARCHAR(200)", nullable: true),
                    Foto = table.Column<string>(type: "VARCHAR(200)", nullable: true),
                    IdAluno = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdProfessor = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CodRecupSenha = table.Column<short>(type: "SMALLINT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.IdUsuario);
                    table.ForeignKey(
                        name: "FK_Usuarios_Alunos_IdAluno",
                        column: x => x.IdAluno,
                        principalTable: "Alunos",
                        principalColumn: "IdAluno",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Usuarios_Professores_IdProfessor",
                        column: x => x.IdProfessor,
                        principalTable: "Professores",
                        principalColumn: "IdProfessor",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Alunos_IdTurma",
                table: "Alunos",
                column: "IdTurma");

            migrationBuilder.CreateIndex(
                name: "IX_Faltas_IdAluno",
                table: "Faltas",
                column: "IdAluno");

            migrationBuilder.CreateIndex(
                name: "IX_Faltas_IdMateria",
                table: "Faltas",
                column: "IdMateria");

            migrationBuilder.CreateIndex(
                name: "IX_Professores_IdMateria",
                table: "Professores",
                column: "IdMateria");

            migrationBuilder.CreateIndex(
                name: "IX_TurmasMaterias_IdMateria",
                table: "TurmasMaterias",
                column: "IdMateria");

            migrationBuilder.CreateIndex(
                name: "IX_TurmasMaterias_IdTurma",
                table: "TurmasMaterias",
                column: "IdTurma");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_Email",
                table: "Usuarios",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_IdAluno",
                table: "Usuarios",
                column: "IdAluno");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_IdProfessor",
                table: "Usuarios",
                column: "IdProfessor");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Faltas");

            migrationBuilder.DropTable(
                name: "TurmasMaterias");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Alunos");

            migrationBuilder.DropTable(
                name: "Professores");

            migrationBuilder.DropTable(
                name: "Turmas");

            migrationBuilder.DropTable(
                name: "Materias");
        }
    }
}