$(document).ready(function() {
    random = function() {
        r = Math.floor(Math.random() * 100);
        console.log(r);
        return r;
    } // Why do I need to exclude var here?
    win = random();
    tries = 0;

    var hotOrCold = function(guess, win) {
        tries++;
        var difference = Math.abs(guess - win);
        var hint = (guess > win) ? "too high.<br />" : "too low.<br />";
        if (guess > 100) {
            reply = "Number is greater than 100. Try again.<br />";
        } else if (guess == win) {
            reply = "We have a winner! It took you " + tries + " tries!";
            $('#response').html('');
            $('#guess-field').prop('disabled', true);
        } else if (guess == "") {
            reply = "I can't read your mind. You need to enter a number.<br />";
        } else if (guess == 0) {
            reply = "There's always someone like you that will guess 0" +
                " when you give a range of from 1-100.<br />";
        } else if (isNaN(guess)) {
            reply = "That isn't a number.<br />";
        } else if (difference < 20 && difference >= 5) {
            reply = "Getting warming. But still " + hint;
        } else if (difference < 5) {
            reply = "Burning up! Just a little " + hint;
        } else {
            reply = "You are colder than a polar bear's" +
                " toenail because you are way " + hint;
        }
        $('#response').append(reply);
    };

    $('#guess-field').keydown(function(e) {
        if(e.keyCode == 13) {
            $('#guess').click();
        }
    });
    $('#guess').click(function() {
        g = $('#guess-field');
        hotOrCold(g.val(), win);
        g.val(''); 
    });

    $('#again').click(function() {
        win = random();
        $('#response').html('');
        $('#guess-field').prop('disabled', false);
        tries = 0;
    });
});
