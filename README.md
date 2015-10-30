# king-pong  
Be the King of Ping Pong.  
  
## Description  
This is a very simple scorecard used to keep tally of ping-pong games.  

## Technical Details
+ Runs on the [Meteor framework](https://www.meteor.com/)
  * includes a mongoDB backend
  * websockets, reactive UI, and all that jazz
  * easy hot-deploys
  * easily create a simple mobile app (cordova)
  
And of course all of this is _complete_ overkill for a simple ping-pong scoreboard.

### Steps to install
1. Install Meteor.  [link for instructions](https://www.meteor.com/install)
  * hint - you only need to run this command `curl https://install.meteor.com/ | sh`
2. download repo
3. Edit the file `/server/startup.js`
```
//change this part to whatever players you want to be included in your list.  
//Add as many as needed to the array
var initialPlayers = [
    "Player 1",  
    "Player 2"
];
```

* navigate to project directory and run command `meteor`

Boom! project will initialize and run (defaults to port 300)  
[http://localhost:3000](http://localhost:3000)