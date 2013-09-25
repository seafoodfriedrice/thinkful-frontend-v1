$(document).ready(function() {
    function random() {
        r = Math.floor(Math.random() * 100);
        console.log(r);
        return r;
    }
    var win = random();
    var tries = 0;

    var $response = $('#response');
    var $field = $('#guess-field');
    var $guess = $('#guess');

    function hotOrCold(guess, win) {
        tries++;

        var difference = Math.abs(guess - win);
        var hint = (guess > win) ? "too high.<br />" : "too low.<br />";
	    var reply;

        var MSG_SPECIFY_NUMBER = "Please specify a number between 1-100.<br />";
        var MSG_WINNER = guess + "? We have a winner! It took you " + tries + " tries!"
        var MSG_WARMER = guess + "? Getting warmer. But still " + hint;
        var MSG_BURNING = guess + "? Burning up! Just slightly " + hint;
        var MSG_COLD = guess + "? You are colder than a polar bear's" +
                       " toenail because you are way " + hint;


        if (guess > 100 || guess <= 0 || guess == "" || isNaN(guess)) {
            $response.append(MSG_SPECIFY_NUMBER);
            tries--; // User mistake doesn't count as a try
            return;
        }

        if (guess == win) {
            $response.html(MSG_WINNER);
            // jquery .add() allows passing of
            // two objects in one method chain
            $($field).add($guess).prop('disabled', true);
            return;
        }
        
        if (difference < 20 && difference >= 5) {
            $response.append(MSG_WARMER);
            return;
        } else if (difference < 5) {
            $response.append(MSG_BURNING);
            return;
        } else {
            $response.append(MSG_COLD);
            return;
        }
    };

    $field.keydown(function(e) {
        if (e.keyCode == 13)
            clickGuess(e);
    });

    $guess.click(clickGuess);
    
    function clickGuess(e) {
        hotOrCold($field.val(), win);
        $field.val(''); 
    }

    $('#new-game').click(function() {
        win = random(), tries = 0;
        $response.html('');
        $($field).add($guess).prop('disabled', false);
    });
});
