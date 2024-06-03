using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VICTORUM.Migrations
{
    /// <inheritdoc />
    public partial class DbTechSchool : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Turma_Aluno_IdAluno",
                table: "Turma");

            migrationBuilder.DropIndex(
                name: "IX_Turma_IdAluno",
                table: "Turma");

            migrationBuilder.DropColumn(
                name: "IdAluno",
                table: "Turma");

            migrationBuilder.AddColumn<Guid>(
                name: "TurmaDomainIdTurma",
                table: "Aluno",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_TurmaDomainIdTurma",
                table: "Aluno",
                column: "TurmaDomainIdTurma");

            migrationBuilder.AddForeignKey(
                name: "FK_Aluno_Turma_TurmaDomainIdTurma",
                table: "Aluno",
                column: "TurmaDomainIdTurma",
                principalTable: "Turma",
                principalColumn: "IdTurma");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aluno_Turma_TurmaDomainIdTurma",
                table: "Aluno");

            migrationBuilder.DropIndex(
                name: "IX_Aluno_TurmaDomainIdTurma",
                table: "Aluno");

            migrationBuilder.DropColumn(
                name: "TurmaDomainIdTurma",
                table: "Aluno");

            migrationBuilder.AddColumn<Guid>(
                name: "IdAluno",
                table: "Turma",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Turma_IdAluno",
                table: "Turma",
                column: "IdAluno");

            migrationBuilder.AddForeignKey(
                name: "FK_Turma_Aluno_IdAluno",
                table: "Turma",
                column: "IdAluno",
                principalTable: "Aluno",
                principalColumn: "IdAluno",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
