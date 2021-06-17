module.exports = {
  name: 'hello',
  description: "This is a Hello World command !",
  execute(message, args){
    message.channel.send('World !');
  }
}