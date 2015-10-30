//change these and add as many as desired on initial load
var initialPlayers = [
    "Player 1",
    "Player 2"
];


// On server startup, create some players if the database is empty.
Meteor.startup(function () {
    if (Players.find().count() === 0) {
        _.each(initialPlayers, function (name) {
            Players.insert({
                name: name,
                score: 0
            });
        });
    }
});

