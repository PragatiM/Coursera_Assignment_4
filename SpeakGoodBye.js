(function(window){
  
  var byeSpeaker = new Object()

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  
  window.byeSpeaker = byeSpeaker;

})(window)
