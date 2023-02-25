const express = require('express');
const qrcodeTerminal = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const Excel = require('exceljs');
const colors = require('colors');



const app = express();
const client = new Client();

// Mensajes 

const numbers = [



 
    
  
  

  // 
  "573204037757",
   


]
  
  const messages = [

    
  


  // 
   "Hola Camilo soy MED 🤖 BOT ya termine de Enviar los Mensajes ",
  ]
// Genera un código QR en la consola para escanear
client.on('qr', (qr) => {
qrcodeTerminal.generate(qr, { small: true });
});

client.on('authenticated', (session) => {
console.log('Autenticado');
});

client.on('ready', () => {
  console.log('Listo para recibir y enviar mensajes');
 
  let messageCounter = 0;
  // Recorre el array de números de teléfono
  numbers.forEach((phoneNumber, index) => {
    // Agrega el sufijo @c.us al número de teléfono
    const phoneNumberWithSuffix = `${phoneNumber}@c.us`;
   

    const randomInterval = Math.floor(Math.random() * 46) + 15; // Genera un número aleatorio entre 5 y 50 segundos
setTimeout(() => {
      client.sendMessage(phoneNumberWithSuffix, messages[index]);
      console.log(`mensaje ${++messageCounter} enviado a ${phoneNumberWithSuffix}`.red);

      // Crea un archivo de Excel llamado "Mensajes.xlsx"
      const workbook = new Excel.Workbook();
      workbook.xlsx.readFile('Mensajes.xlsx')
        .then(() => {
          // Selecciona la hoja de cálculo "Hoja 1"
          const worksheet = workbook.getWorksheet('Hoja 1') || workbook.addWorksheet('Hoja 1');

          // Agrega una nueva fila con los datos del mensaje enviado
          worksheet.addRow([phoneNumberWithSuffix, messages[index]]);

          // Guarda el archivo de Excel
          return workbook.xlsx.writeFile('Mensajes.xlsx');
        })
        .catch(error => console.error(error));
      }, randomInterval * 1000 * (index + 1));
    // }, 25 * 1000 * (index + 1));
  });
});
// 


app.listen(3012, () => {
console.log('Servidor Express escuchando en el puerto 3012');
client.initialize();
});
