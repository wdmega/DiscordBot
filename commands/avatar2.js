module.exports = {
  name: 'Avatar',
  description: "What is My Avatar",
  execute: (message, args) => {
    if (!args.length || message.mentions.users.first() == undefined){
      return (
        message.channel.send(`Usuário invalido ${message.author}`)
      )
    }else {
      const taggedUser = message.mentions.users.first();
      message.reply(`Aqui Esta o Avatar do: ${taggedUser.username}\n ${taggedUser.avatarURL()}`);
    };
  }
}
