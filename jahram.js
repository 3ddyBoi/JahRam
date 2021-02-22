const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log(prefix);
    console.log(token);
});

client.login(token);

client.on('message', message => {
    console.log(message.content);
});