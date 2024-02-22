# 🚗 Sistema de Envio de E-mails da CarStore 🚗


Este projeto é um sistema de envio de e-mails desenvolvido para a CarStore. Ele foi projetado para enviar e-mails de marketing para uma lista de clientes que aceitam receber esses e-mails.

## 📬 Como funciona

O sistema verifica se é segunda-feira, pois os e-mails de marketing são enviados apenas neste dia da semana. Em seguida, ele percorre a lista de e-mails dos clientes e envia um e-mail para cada cliente que aceita receber e-mails de marketing.

Se o envio de um e-mail falhar, o sistema tentará reenviá-lo. Além disso, o sistema rastreia o número total de e-mails enviados, bem como o número de entregas bem-sucedidas e falhadas.

## 💻 Código

O código é composto por várias funções:

- `enviarEmail(address, subject, body)`: Esta função envia um e-mail para o endereço fornecido com o assunto e corpo fornecidos. Se algum desses parâmetros estiver faltando, a função retornará um erro.
- `assembleEmailBody()`: Esta função retorna o corpo do e-mail que será enviado aos clientes.
- `isMonday()`: Esta função verifica se o dia atual é segunda-feira.
- `trackEmailDeliveries(emailDeliveries)`: Esta função rastreia o número de e-mails enviados, bem como o número de entregas bem-sucedidas e falhadas.
- `resendFailedEmails(failedDeliveries)`: Esta função tenta reenviar e-mails que falharam na primeira tentativa de envio.
- `sendEmails()`: Esta é a função principal que coordena o envio de e-mails.

## 🚀 Uso

Para usar este sistema, você precisa ter uma lista de e-mails de clientes que aceitam receber e-mails de marketing. Em seguida, você pode chamar a função `sendEmails()` para iniciar o processo de envio de e-mails.


