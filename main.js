const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./gitignore/gitignore.js');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
    console.log(message.content);
});