var subtitle = document.querySelector( "h2" );
var userInput = document.querySelector( '#userInput' );
var originSubtitle = subtitle.innerHTML;

userInput.addEventListener(
    "keyup",
    function greetUser( event ){
        subtitle.innerHTML = originSubtitle + event.target.value ;
    }
);

/*
var getUserName = function getUserName(){
    var userName = prompt( "What's your name? " );

    if( !userName ){
        getUserName();
    }
    else{
        subtitle.textContent += " " +  userName;
    }
};

getUserName();
*/
