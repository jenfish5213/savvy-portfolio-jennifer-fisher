var story = {
  "start": "Your leaving a party in the wood at an abandon house. You got into a fight with your friends. Your now walking down a dark and unnamed road. You look at your phone and notice you have 20% of battery life. As you walk down the dark road, you hear someone called you name. You must choose: do nothing, run, go back to party or turn around.",
  "do nothing": "Someone comes behind you and begin to stab you continually. Your dead now. Want to try again?",
  "run": "You start to run on the dark road and tripped over something wet. Choose: get up, do nothing.",
  "turn around": "You notice there was someone standing in the middle of the road. Choose: run or do nothing.",
  "go back to the party": "Your now back at the abandoned house. All the lights are off. The voice that called you earlier is getting closer. Choose: run, do nothing, go into the house.",
  "get up": "You use the light on your phone to see what you tripped over. It’s a shoe but it’s covered in blood. Choose: call your friends , do nothing, or keep running.",
  "call your friends": "Your friend answer the phone. You can’t make out what they are saying. Choose: go back to the party, do nothing, or keep running.",
  "keep running": "You see a car headlights coming down the road. You notice there is a house in the woods. The lights are on! Choose: do nothing, go to the house, or run towards the car.",
  "run towards the car": "The car was speeding down the road too fast. They didn’t see you waving your hands. You got ran over. You died. Want to try again?",
  "go to the house": "Your knocking on the door and no answer. You ran to the back of the house. To your eye you see a massacre. Bloody bodies ever where. You hear foot steps in the woods coming closer. Choose: go hide or do nothing.",
  "go hide": "Your hiding under the house. You hear 5 people enter the house from the woods. They were looking for you. Choose: stay hidden or call 911.",
  "call 911": " They can’t hear you so they hung up. Your mother called to check on you. They hear your phone ringing. They found you and killed you. Want to try again?",
  "stay hidden": "You waited until morning. You heard a car pull up to the house. It was the police. Your saved or are you? ",
  "go into the house": "You walk through the door. You can’t see anything. You use your phone light to walk through the house. Choose: look for your friends or do nothing.",
  "look for your friends": "Once you turn on the light. You see the horror lies before you. Your friends has been killed. You hear foot steps coming towards you. Choose: do nothing or turn  off the light.",
  "turn off the light": "You got under the table near by. But it’s to late! Someone grabs your leg and start pulling you. Choose: defend yourself or do nothing.",
  "defend yourself": "There a knife lying next to you. You grab the knife and stab the dark figure. Choose: do nothing or find out who grabbed you.",
  "find out who grabbed you": "Someone comes behind you and begin to stab you continually. Your dead now. Want to try again?"

};


var choices = [
  "start",
  "run",
  "turn around",
  "do nothing",
  "go back to the party",
  "get up",
  "call your friends",
  "keep running",
  "go to the house",
  "run towards the car",
  "run to the house",
  "go hide",
  "call 911",
  "stay hidden",
  "go into the house",
  "look for your friends",
  "turn off the light",
  "defend yourself",
  "find out who grabbed you"
]
var isValid = false;


function checkValid( select ) {
    choices.forEach(function( pick ){
      if (select === pick ) {
        console.log("true");
        isValid = true;
        document.getElementById("errorLog").textContent = ""
      }
  });

    if( isValid === false ) {
        console.log("Not valid, say I");
        document.getElementById("errorLog").textContent = "You messed up."
    }
};

function runStory() {
  var selection = document.getElementById("textInput").value;
  checkValid( selection );
      if ( isValid === true) {
        document.getElementById("textOutput").textContent = story[selection];
      }
isValid = false;
}
