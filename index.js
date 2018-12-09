const Nexmo = require("nexmo");

// creates 2 copies of contact list
var Santa = require("./contacts");
var Santee = Santa.slice();

// register API
const nexmo = require("./config");
const from = "Your nexmo virtual number"
var to, text;

secretSanta();

async function secretSanta() {
  shuffle(Santa);

  while (Santa.length != 0) {
    if (
      Santa[0].contactName.includes(Santee[0].contactName) ||
      Santee[Santa.length - 1].contactName.includes(
        Santa[Santa.length - 1].contactName
      )
    ) {
      shuffle(Santa);
      shuffle(Santee);
    } else {


       to = Santa[0].contactNumber;

       text =
        "You, " +
        Santa[0].contactName +
        " have " +
        Santee[0].contactName +
        " to buy for!";

      await delay(5000);

      await nexmo.message.sendSms(from, to, text);

      Santa.shift();
      Santee.shift();
      console.log(Santa.length + 1);
    }
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
