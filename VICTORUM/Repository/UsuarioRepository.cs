using Microsoft.AspNetCore.Identity;
using VICTORUM.Context;
using VICTORUM.Domain;
using VICTORUM.Domains;
using VICTORUM.Interface;
using VICTORUM.Ultils;
using VICTORUM.Utils;
using WebAPI.ViewModels;




namespace VICTORUM.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        TechSchool ctx = new TechSchool();

        public bool AlterarSenha(string email, string senhaNova)
        {
            try
            {
                var user = ctx.Usuario.FirstOrDefault(x => x.Email == email);

                if (user == null) return false;

                user.Senha = Criptografia.GerarHash(senhaNova);

                ctx.Update(user);

                ctx.SaveChanges();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarFoto(Guid id, string novaUrlFoto)
        {
            try
            {
                UsuarioDomain usuarioBuscado = ctx.Usuario.FirstOrDefault(x => x.IdUsuario == id)!;

                if (usuarioBuscado != null)
                {
                    usuarioBuscado.Foto = novaUrlFoto;
                }

                ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarUsuario(Guid id, UsuarioViewModel usuario)
        {
            try
            {
                UsuarioDomain usuarioBuscado = ctx.Usuario.FirstOrDefault(x => x.IdUsuario == id)!;

                if (usuario.Nome != null)
                    usuarioBuscado.Nome = usuario.Nome;

                if (usuario.Senha != null)
                {
                     usuarioBuscado.Senha = Criptografia.GerarHash(usuario.Senha);
                }

                ctx.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public UsuarioDomain BuscarPorEmailESenha(string? email, string? senha)
        {
            try
            {
                var user = ctx.Usuario.Select(u => new UsuarioDomain
                {
                    IdUsuario = u.IdUsuario,
                    Email = u.Email,
                    Senha = u.Senha,
                    Nome = u.Nome,
                    TiposUsuario = new TiposUsuarioDomain
                    {
                        Id = u.TiposUsuario!.Id,
                        TipoUsuario = u.TiposUsuario.TipoUsuario
                    }
                }).FirstOrDefault
                (x => x.Email == email);

                if (user == null) return null!;

                if (!Criptografia.CompararHash(senha, user.Senha!)) return null!;

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public UsuarioDomain BuscarPorId(Guid Id)
        {
            return ctx.Usuario.FirstOrDefault(x => x.IdUsuario == Id)!;
        }

        public void Cadastrar(UsuarioDomain usuario)
        {
            try
            {
                usuario.Senha = Criptografia.GerarHash(usuario.Senha!);
                ctx.Add(usuario);
                ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
