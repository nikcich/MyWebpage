

document.addEventListener('DOMContentLoaded', function(event) {
  let messages = document.getElementsByClassName("msg");
  let channels = document.getElementsByClassName("channels");
  let messbut = document.getElementsByClassName("Message");
  let lev = document.getElementById("lvl");
  let reac = document.getElementById("spitesReact");
  let x = document.getElementById("xp");
  let liv = document.getElementById("lives");
  let noti = document.getElementById("NOTIFICATION");
  let onl = document.getElementById("online");

  let maintext = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];

  let c2 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c3 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c4 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c5 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c6 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c7 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c8 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c9 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c10 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c11= ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c12 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c13 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c14 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c15 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c16 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c17 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c18 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];
  let c19 = ["Hey cotton candy daddies", "shut up taco", "i crashed in a middle school",
                  "TRIUMPH SPONSOR ME", "i go outside to listen to the vtec come on at 160 degrees",
                  "my gsxr fell off its stand", "THATS A STRIKE"];


  let n1 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n2 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n3 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n4 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n5 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n6 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n7 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n8 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n9 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n10 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n11= ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n12 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n13 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n14 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n15 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n16 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n17 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n18 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];
  let n19 = ["Austin's Blackest Taco", "Irish bastard", "Nikolas", "Yammie Noob", "Spite", "Synthetic Lemon", "SpitesNightmare"];

  let namess = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19];



  let nsfw = ["Is it ghey if I masturbated into a sex doll.... but the sex doll was a guy?",
              "Have you ever wiped your ass and accidentally got shit on your fingers",
              "I would bury my dick so far in your ass who ever could pull it out would be crowned king arthur",
              "God fucking damnit, you even got the vtec",
              "Have you ever tried to suck your own dick?",
            "Yeah, I'm not flexible enough tho, can only tongue the head",
          "Is it odd that I went out to my bike just to turn it on to listen to it idle? I even let it warm up to 160 to hear the vtec come on...",];

  let myname = "SpitesNightmare";


  let alltexts = [maintext, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19];
  let currentchannel = 0;

  let spitesReact = 100;
  let level = 1;
  let lives = 10;
  let xp = 1;

  function SpitesReaction(){
    for(let i = 0; i < messages.length; i++){
      let nm = namess[currentchannel][i];
      let text = alltexts[currentchannel][i];
      if(nm == myname){
        if(text != "DELETED MESSAGE"){
          if(xp > 1){ xp = xp - 1}
          noti.innerHTML = "YOU GOT A STRIKE";
          lives = lives -1;
        }
      }
    }
    window.setTimeout(RemoveNoti, 1500);
  }

  function RemoveNoti(){
    noti.innerHTML = "";
    onl.innerHTML = '';
    updateStuff();
  }

  let queued = false;
  //SpitesReaction();
  let xpper = 50;

  function updateStuff(){
    level = Math.floor(xp/(xpper + xpper*(.02*level)));
    spitesReact = 100 - level;

    lev.innerHTML = "Level: " + level;
    reac.innerHTML = "Spites Reaction: " + spitesReact;
    x.innerHTML = "XP: " + xp;
    liv.innerHTML = "Lives reamining: " + lives;
  }
  updateStuff();

  messbut[0].addEventListener('click', function(e) {
    updateStuff();
    for(let i = 0; i < messages.length-1; i++){
      let thistxt = messages[i].getElementsByClassName("msgtxt");
      let thisname = messages[i].getElementsByClassName("name");

      let realtxt = messages[i+1].getElementsByClassName("msgtxt");
      let names = messages[i+1].getElementsByClassName("name");
      thisname[0].innerHTML = names[0].innerHTML;
      thistxt[0].innerHTML = realtxt[0].innerHTML;

      namess[currentchannel][i] = names[0].innerHTML;
      alltexts[currentchannel][i] = realtxt[0].innerHTML;
    }

    let n = Math.floor((Math.random() * nsfw.length));
    let newmsg = messages[messages.length-1];
    let newtxt = newmsg.getElementsByClassName("msgtxt");
    let newname = newmsg.getElementsByClassName("name");
    newtxt[0].innerHTML = nsfw[n];
    newname[0].innerHTML = myname;

    namess[currentchannel][namess.length-1] = myname;
    alltexts[currentchannel][6] = nsfw[n];

    if(queued == false){
      console.log("here");
      queued = true;
      onl.innerHTML = 'SPITE IS ONLINE';
      window.setTimeout(SpitesReaction, 50*spitesReact);
      queued = false;
    }


  }, false);


  for(let i = 0; i < messages.length; i ++){
    let realtxt = messages[i].getElementsByClassName("msgtxt");
    let names = messages[i].getElementsByClassName("name");
    names[0].innerHTML = namess[currentchannel][i];
    realtxt[0].innerHTML = alltexts[currentchannel][i];

    messages[i].addEventListener('click', function(e) {

      let realtxt2 = messages[i].getElementsByClassName("msgtxt");
      let names2 = messages[i].getElementsByClassName("name");
      if(names2[0].innerHTML == myname && alltexts[currentchannel][i] != "DELETED MESSAGE"){
        realtxt[0].innerHTML = "DELETED MESSAGE";
        alltexts[currentchannel][i] = "DELETED MESSAGE";
        xp = xp + 1;
      }
      updateStuff();
    }, false);
  }

  for(let i = 0; i < channels.length; i++){
    channels[i].addEventListener('click', function(e) {
      updateStuff();
      currentchannel = i;
      for(let i = 0; i < messages.length; i ++){

        let realtxt = messages[i].getElementsByClassName("msgtxt");
        let names = messages[i].getElementsByClassName("name");
        names[0].innerHTML = namess[currentchannel][i];
        realtxt[0].innerHTML = alltexts[currentchannel][i];
      }
    }, false);
  }

})
