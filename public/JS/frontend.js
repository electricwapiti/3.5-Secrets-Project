// Client-side code to run in the user's browser
console.log("frontend.js is run");
/**
 * Plays the sound corresponding to the given name.
 *
 * param: name The name of the sound file to play (without extension).
 *
 * return: None. This function plays the audio and does not return a value.
 **/
function playSound(name){
    var audio = new Audio('/sounds/' + name + '.mp3');
    audio.play();
}

/**
 * Shares with the user that they input the wrong password.
 * 
 * param: None.
 * 
 * return: None.
 */
function goBeserk(attempt){
        // Step 1: sound the alarm
        console.log('made it to go beserk fxn');
        playSound('wrong');
        // include an alarm gif or something, maybe a loading circle for now?

        //Step 2: notify the user
        // change the header to "Incorrect password"
        $("h1").text("Incorrect password");

        // Step 3: type the error message
        const msg = errMsgs[attempt - 1] || errMsgs[errMsgs.length - 1];
        const speed = 50/(attempt);
        typeText('#output', msg, speed);

        //Step 4: go beserk
        if(attempt > 2) {
            let isDark = false;
            setInterval(() => {
                isDark = !isDark;
                document.body.classList.toggle('dark-mode', isDark);
                document.body.classList.toggle('light-mode', !isDark);
            }, 20);
        }
        //change the background of the website and all of the components between two themes 10x/sec
        //play a siren
        //create popup after popup

        //Copied from simon game
        // $("body").addClass("game-over");
        // $("h1").text("Incorrect press. Game over!")
        // setTimeout(function() {
        //     $("body").removeClass("game-over");
        // }, 500);
}

$(document).ready(() => {
    console.log('made it to this fxn');
    const params = new URLSearchParams(window.location.search);
    if(params.get('error')) {
        const attemptNum = parseInt(params.get('attempt') || '1', 10);
        goBeserk(attemptNum);
    }
});

const errMsgs = [
  "Sorry, that password is incorrect. Please try again.",
  "Still wrong. Further incorrect answers will escalate this.",
  "That third attempt is still incorrect!",
  "TODO: Insert famous quote here.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta luctus mi eu consequat. Nam eget posuere lacus. Vivamus accumsan sit amet mauris at maximus. Ut scelerisque scelerisque erat, eget ultricies arcu facilisis a. Integer sem eros, auctor vitae luctus eu, eleifend non turpis. Proin nec mollis sapien, id maximus quam. Maecenas a tortor a lectus euismod dictum egestas eu metus. Ut id facilisis ipsum, et venenatis lorem. Fusce id elit arcu. Sed at magna at velit euismod auctor in at elit. Praesent tempus, tellus ac viverra faucibus, metus libero tristique ex, vel fringilla nulla enim vitae odio. Curabitur scelerisque nulla ut felis interdum, non hendrerit felis maximus. Sed auctor finibus felis at malesuada. Suspendisse potenti. In pulvinar, risus efficitur hendrerit porta, risus ante pretium magna, ac lobortis neque nisl at dolor.",
];

// Type text.
function typeText(targetSelector, text, speed) {
  const target = document.querySelector(targetSelector);
  target.textContent = '';  // clear previous content
  
  let index = 0;
  const intervalId = setInterval(() => {
    target.textContent += text.charAt(index);
    index++;
    if (index >= text.length) {
      clearInterval(intervalId);
    }
  }, speed);
}