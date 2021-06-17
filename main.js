// Connect with discord.js to get all features from the framework
// and able us to use discord comunicate with our node_modules
const Discord = require('discord.js');
require('dotenv').config();

// Here we are creating our new discord bot as a client
const client = new Discord.Client();

// The Prefix is what we will use as reference to our bot read what we say
// and if what we said is to he
const {prefix} = require('./config.json');

// fs allow us to get in other JS files
const fs = require('fs');

// A collection is where we have all the commands stored;
client.commands = new Discord.Collection();

// Make sure that all files we gonna read are JS files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// if everything is correct this will say that our bot is online
client.once('ready', () => {
  console.log('MegaBot is online!')
});

client.on('message', message => {
  // Verify if the message starts with our prefix or the author is a bot.
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  // args = everything after the bot command
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  // command is args without be an array and in lower case
  const command = args.shift().toLowerCase();

  if(command === 'hello'){ 

    client.commands.get('hello').execute(message, args);

  } else if (command === 'twitter') {

    client.commands.get('twitter').execute(message, args);
    
  } else if (command === 'clear') {

    client.commands.get('clear').execute(message, args);
    
  } else if (command === 'regras') {
    client.commands.get('regras').execute(message, args, Discord);

  } else if (command === 'youtube'){

    client.commands.get('youtube').execute(message, args);

  } else if (command === 'avatar'){
    // A command is the first text after the prefix
    // A arg is the first text after the command
    // const taggedUser gives me the mentioned user from the argument of the command
    // after that I replayed with a message and using taggedUser.username and returning
    // the tagged user avatarURL.
    // treating errors with this first if so if the args doesn't exist or no mention it will return error.

    if (!args.length || message.mentions.users.first() == undefined){
      return (
        message.channel.send(`Usuário invalido ${message.author}`)
      )
    }else {
      const taggedUser = message.mentions.users.first();
      message.reply(`Aqui Esta o Avatar do: ${taggedUser.username}\n ${taggedUser.avatarURL()}`);
    }
  } else if (command === 'avatar2'){
    try {
      client.commands.get('avatar2').execute(message, args);
    }catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  };
})


// Login/giving acesse our discord bot
// OBS: Try to let it at the very end of the main file.
client.login(process.env.DISCORD_BOT_TOKEN);