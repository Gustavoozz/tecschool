using VICTORUM.Utils.Mail;

namespace VICTORUM.Utils.Mail
{
    public class IEmailService
    {
        //método assincrono para envio de email
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
