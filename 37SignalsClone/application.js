$(document).ready(function() {
    var headline = $(".headline");
    var basecamp = $(".basecamp");
    var highrise = $(".highrise");
    var campfire = $(".campfire");

    $(".box#bc").hover(
        function() {
            headline.hide();
            basecamp.show();
        },
        function() {
            basecamp.hide();
            headline.show();
        }
    );
    $(".box#hr").hover(
        function() {
            headline.hide();
            highrise.show();
        },
        function() {
            highrise.hide();
            headline.show();
        }
    );

    $(".box#cf").hover(
        function() {
            headline.hide();
            campfire.show();
        },
        function() {
            campfire.hide();
            headline.show();
        }
    );
});
