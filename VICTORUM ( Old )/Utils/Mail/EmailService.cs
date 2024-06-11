using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace VICTORUM.Utils.Mail
{
    public class EmailService
    {
        //variavel que armazena as configs de email settings
        private readonly EmailSettings emailSettings;

        //construtor que recebe a dependency injections de EmailSettings
        public EmailService(IOptions<EmailSettings> options)
        {
            emailSettings = options.Value;
        }

        //metodo para envio de email
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
                var email = new MimeMessage();
                // Define o remetente do email
                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                // Define o destinatário
                email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));

                // Define o assunto do email
                email.Subject = mailRequest.Subject;

                // Cria o corpo do email
                var builder = new BodyBuilder();

                // Define o corpo do email como HTML
                builder.HtmlBody = mailRequest.Body;

                // Não precisa mais definir o corpo diretamente no objeto MimeMessage,
                // pois o BodyBuilder cuidará disso automaticamente.

                using (var smtp = new SmtpClient())
                {
                    // Conecta-se ao servidor SMTP usando os dados de emailSettings
                    smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

                    // Autentica-se no servidor SMTP usando os dados de mailSettings
                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);

                    // Envia o email
                    await smtp.SendAsync(email);
                }
        }

    }
}
