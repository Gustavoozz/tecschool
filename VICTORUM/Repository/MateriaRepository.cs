﻿using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Interface;
using Microsoft.EntityFrameworkCore;
using VICTORUM.Utils;

namespace VICTORUM.Repository
{
    public class MateriaRepository : IMateriaRepository
    {
        TechSchool ctx = new TechSchool();

        public MateriaDomain BuscarPorId(Guid Id)
        {
           try
            {
                return ctx.Materia.FirstOrDefault(x => x.IdMateria == Id)!;
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void Cadastrar(MateriaDomain materia)
        {
            try
            {
                ctx.Materia.Add(materia);
                ctx.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }   
        }

      

        public List<MateriaDomain> ListarTodos()
        {
           return ctx.Materia.ToList();
        }
    }
}