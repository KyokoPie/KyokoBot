const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjI3NzgxODU5NzQ4NzQxMTYx.XZCGyQ.aRV3OD1Fk9SA_GEmEJ5oNCoihuk);//BOT_TOKEN is the Client Secret
