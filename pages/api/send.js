import nodemailer from 'nodemailer';

export default function send(req, res) {
  if (req.method === 'POST') {
    const remetent = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'greenbackconsultoria2@gmail.com',
        pass: 'AluGreenback',
      }
    })
    const email = {
      from: 'greenbackconsultoria2@gmail.com',
      to: 'gabriel.alumia@gmail.com',
      subject: 'Greenback consultoria: Nova inscrição!',
      text: `
      Nome completo: ${req.body.fullname}
      E-mail: ${req.body.email}
      Telefone: ${req.body.phone}
      Cidade: ${req.body.uf}
      Mensagem: ${req.body.message}
      `
    }

    remetent.sendMail(email, function (error, info) {
      if(error)
        return res.json({
          message: 'Erro interno!'
        })
    })

    res.json({
      message: 'E-mail enviado com sucesso!'
    });
  }
}