const clock = () => {
    var date    = new Date();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;
  
    hours     = updateTime(hours);
    minutes   = updateTime(minutes);
    seconds   = updateTime(seconds);
    var name  = "Sayang";
  
    // if else condition
  
    midday = (hours >= 12) ? "PM" : "AM";
  
    document.getElementById("clock").innerHTML =
      ""+hours+"" + ":" + ""+minutes+"" + ":" + ""+seconds+"" + ""+midday+"";
  
    var time = setTimeout(function () {
      clock();
    }, 1000);
  
    //   Good Morning and Good Night Conditions
  
    if (hours < 12) {
      var greeting = "Good Morning " + name + " semangat dan sehat selalu!";
    }
  
    if (hours >= 12 && hours <= 15) {
      var greeting = "Siang " + name + " Jangan lupa mimik putih ya";
    }
  
    if (hours >= 15 && hours <= 17) {
      var greeting = "Sore " + name + " Bentar lagi mas pulang";
    }

    if (hours >= 17 && hours <= 21) {
        var greeting = "" + name + " Doa bareng ya sayang nanti jam sepuluh";
    }

    if (hours >= 21 && hours <= 24) {
        var greeting = "Met malem" + name + " Have a nice dream. Mas sayang Bella";
    }
  
    document.getElementById("greetings").innerHTML = greeting;
  }
  
  const updateTime = (k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }
  
  // call clock function 
  clock();