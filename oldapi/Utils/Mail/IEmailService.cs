namespace VICTORUM.Utils.Mail
{
    public interface IEmailService
    {
        //método assincrono para envio de email
        public Task SendEmailAsync(MailRequest mailRequest);
    }
}
 