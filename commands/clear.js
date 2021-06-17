module.exports = {
  name: 'clear',
  description: "Clear messages!",
  async execute(message, args) {
    if (message.member.roles.cache.has('849635820227002379')){
      if (!args[0]) return message.reply("Por favor informe quantas mensagens você gostaria de apagar!");
      if (isNaN(args[0])) return message.reply("Por favor informe um número!");
  
      if (args[0] >  100) return message.reply("EIII !!! Você não pode apagar esse tanto de mensagens de uma vez, Limite máximo de 100! :angry: :mega:");
      if (args[0] < 1) return message.reply("HAHAHA !!! você quer me bugar ?? você precisa deletar pelo menos uma mensagem !")
  
      await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages);
      });
    }else {
      message.channel.send('Você não possui permissão para apagar mensagens. Fale com um moderador !')
    }
  }
}