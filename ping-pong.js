// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Players = new Mongo.Collection("players");

if (Meteor.isClient) {
    Template.scoreboard.helpers({
        players: function () {
            return Players.find({}, { sort: { score: -1, name: 1 } });
        },
        selectedName: function () {
            var player = Players.findOne(Session.get("selectedPlayer"));
            return player && player.name;
        }
    });

    Template.scoreboard.events({
        'click .inc': function () {
            Players.update(Session.get("selectedPlayer"), {$inc: {score: 1}});
        }
    });

    Template.player.helpers({
        selected: function () {
            return Session.equals("selectedPlayer", this._id) ? "selected" : '';
        }
    });

    Template.player.events({
        'click': function () {
            Session.set("selectedPlayer", this._id);
        }
    });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
    var names = [
        "Justin Maat", "Corey Hill", "John Valentine", "Tommy Kelly", "Jason Crider", "Glenn Chen",
        "Ahmed Alrawi", "David Freeman", "Derek Nagy", "Cathy Domer", "Derrick Rollins", "Hector Martinez",
        "Luke Davis", "Mike Maloof", "Shimone Berger", "Nick Christenson", "Mike Cannell"];

    Meteor.startup(function () {
        if (Players.find().count() === 0) {
            _.each(names, function (name) {
                Players.insert({
                    name: name,
                    score: 0
                });
            });
        }
    });
}