﻿namespace VICTORUM.Utils.Mail
{
    public class MailRequest
    {
        //Email do destinatario
        public string? ToEmail { get; set; }

        //assunto do email
        public string? Subject { get; set; }

        //corpo do email
        public string? Body { get; set; }
    }
}
