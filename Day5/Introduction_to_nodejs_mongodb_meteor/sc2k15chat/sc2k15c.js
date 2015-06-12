Rooms = new Mongo.Collection('rooms');
Messages = new Mongo.Collection('messages');
if(Meteor.isClient){
  Session.setDefault("activeRoom", "ruby");
  Template.main.helpers({
    rooms: function(){
      return Rooms.find();
    }
  });
  Template.main.events({
    "click .room-name": function(){
      return Session.set("activeRoom", this.name);
    }
  });
  Template.room.helpers({
    activeRoom: function(){
      return Session.get("activeRoom");
    },
    messages: function(){
      return Messages.find({room: Session.get("activeRoom")});
    }
  });
  Template.room.events({
    "keypress #message": function(e,t){
      var message = t.$('#message').val().trim();
      var username = "Anonymous dude";
      if(e.which ===13 && message != ""){
        Messages.insert({
          message: message,
          username: username,
          room: Session.get("activeRoom")
        });
        t.$('#message').val('');
      }
    }
  })
}
