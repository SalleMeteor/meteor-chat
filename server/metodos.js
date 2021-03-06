Meteor.publish('chat', function() {
  return chat.find(); 
});

Meteor.startup(function () {
  Meteor.methods({
    enviarTexto: function (usuario, txt) {
      chat.insert({
         nombre: usuario,
         texto: txt,
         timestamp: new Date()
      });
    }
  })
});
