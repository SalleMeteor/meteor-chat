Template.chatItems.entradas = function () {
  return chat.find({}, {sort: {timestamp: -1}, limit: 10});
};
