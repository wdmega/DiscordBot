module.exports = {
  name: 'Regras',
  description: "Regras",
  execute(message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#0095E6')
    .setTitle('Regras')
    .setURL('https://www.twitter.com/wdmegaa')
    .setDescription('This is a embed for the server rules')
    .addFields(
      {name: 'Rule 1', value: 'Be nice'},
      {name: 'Rule 2', value: 'Follow twitter'},
      {name: 'Rule 3', value: 'Caso algo te incomode não brigue de volta, procure algum moderador.'}
    )
    .setImage('https://i.pinimg.com/originals/29/2b/fb/292bfba3d6874400cc5ffdf6d11e7b0f.jpg')
    .setFooter('Tenha certeza que leu as regras do canal');
    
    message.channel.send(newEmbed);
  }
}