const enviarEmail = require('./email.js');

const emailList = [
  { email: "diegoreso@terra.com", acceptsMarketing: true },
  { email: "maria.pereira@negocios2.com.br", acceptsMarketing: false },
  { email: "carlos.rodrigues@industria3.com.br", acceptsMarketing: true },
  { email: "ana.santos@corporacao4.com.br", acceptsMarketing: true },
  { email: "paulo.oliveira@companhia5.com.br", acceptsMarketing: false },
  { email: "julia.costa@instituto6.com.br", acceptsMarketing: true },
  { email: "roberto.souza@organizacao7.com.br", acceptsMarketing: true },
  { email: "luciana.martins@entidade8.com.br", acceptsMarketing: false },
  { email: "marcos.ribeiro@empresa9.com.br", acceptsMarketing: true },
  { email: "patricia.almeida@negocios10.com.br", acceptsMarketing: true },
  { email: "rafael.lima@industria11.com.br", acceptsMarketing: false },
  { email: "fernanda.peixoto@corporacao12.com.br", acceptsMarketing: false },

];

const assembleEmailBody = () => {
  return `
    Cliente amigo,

    Venha conferir nossas Ofertas!!!!
    CarStore
  `;
};

const isMonday = () => {
  const currentDate = new Date();
  return currentDate.getDay() != 1;
};



const trackEmailDeliveries = (emailDeliveries) => {
  const successfulDeliveries = emailDeliveries.filter(delivery => delivery.status === 'Sucess');
  const failedDeliveries = emailDeliveries.filter(delivery => delivery.status !== 'Sucess');

  console.log(`Total de emails enviados: ${emailDeliveries.length}`);
  console.log(`Entregas bem-sucedidas: ${successfulDeliveries.length}`);
  console.log(`Entregas falhadas: ${failedDeliveries.length}`);

  return failedDeliveries;
};


const resendFailedEmails = (failedDeliveries) => {
  for (const delivery of failedDeliveries) {
    try {
      const emailBody = assembleEmailBody();
      const result = enviarEmail(delivery.email, "Oferta Carstore", emailBody);

      if (result.status === "Sucess") {
        console.log(`E-mail reenviado com sucesso para ${delivery.email}!`);
      } else {
        console.log(`Erro ao reenviar e-mail para ${delivery.email}: ${result.message}`);
      }
    } catch (error) {
      console.log(`Erro ao reenviar e-mail para ${delivery.email}: ${error.message}`);
    }
  }
};


const sendEmails = () => {
  if (!isMonday()) {
    console.log("Enviamos e-mails somente na segunda-feira.");
    return;
  }

  const emailDeliveries = [];

  for (const client of emailList) {
    if (client.acceptsMarketing) {
      try {
        const emailBody = assembleEmailBody();
        const result = enviarEmail(client.email, "Oferta Carstore", emailBody);

        emailDeliveries.push({
          email: client.email,
          status: result.status,
          message: result.message || null,
        });

        if (result.status === "Sucess") {
          console.log(`E-mail enviado com sucesso para ${client.email}!`);
        } else {
          console.log(`Erro ao enviar e-mail para ${client.email}: ${result.message}`);
        }
      } catch (error) {
        console.log(`Erro ao enviar e-mail para ${client.email}: ${error.message}`);
      }
    }
  }

  const failedDeliveries = trackEmailDeliveries(emailDeliveries);
  resendFailedEmails(failedDeliveries);
};

try {
  sendEmails();
} catch (error) {
  console.log(`Erro ao enviar e-mails: ${error.message}`);
}
