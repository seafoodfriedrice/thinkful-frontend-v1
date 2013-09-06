$(document).ready(function() {
    var defaultMainText = 'Making collaboration productive and enjoyable for people every day.';
    var defaultMainSubText = 'Frustration-free web-based apps for collaboration, sharing information, and making decisions.';

    $(".box:first-child").mouseenter(function() {
        var mainBasecamp = '<span class="project-hl">Basecamp</span> is the project management tool you wish you had on your last project.';
        var mainSubBasecamp = 'Are you still managing projects with email? Are you still using Excel for your to-do lists? It\'s time to upgrade to Basecamp.<br />Manage projects and collaborate with your team and clients the modern way.';
        $("#main-text").replaceWith('<p id="main-project">' + mainBasecamp + '</p>');
        $("#main-sub-text").replaceWith('<p id="main-sub-project">' + mainSubBasecamp + '</p>');
        $("#basecamp-arrow").show();
    });
    $(".box:first-child").mouseleave(function() {
        $("#main-project").replaceWith('<p id="main-text">' + defaultMainText + '</p>');
        $("#main-sub-project").replaceWith('<p id="main-sub-text">' + defaultMainSubText + '</p>');
        $("#basecamp-arrow").hide();
    });

    $(".box:nth-child(2)").mouseenter(function() {
        var mainHighrise = '<span class="project-hl">Highrise</span> remembers the important things<br />about people you\'d normally forget.';
        var mainSubHighrise = 'Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said,<br />and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.';
        $("#main-text").replaceWith('<p id="main-project">' + mainHighrise + '</p>');
        $("#main-sub-text").replaceWith('<p id="main-sub-project">' + mainSubHighrise + '</p>');
        $("#highrise-arrow").show();
    });
    $(".box:nth-child(2)").mouseleave(function() {
        $("#main-project").replaceWith('<p id="main-text">' + defaultMainText + '</p>');
        $("#main-sub-project").replaceWith('<p id="main-sub-text">' + defaultMainSubText + '</p>');
        $("#highrise-arrow").hide();
    });

    $(".box:nth-child(3)").mouseenter(function() {
        var mainCampfire = 'From near or far, <span class="project-hl">Campfire</span> helps teams work together over the web in real time.';
        var mainSubCampfire = 'Share ideas, dicussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.<br />It\'s game changing.We couldn\'t run our own business without Campfire.';
        $("#main-text").replaceWith('<p id="main-project">' + mainCampfire + '</p>');
        $("#main-sub-text").replaceWith('<p id="main-sub-project">' + mainSubCampfire + '</p>');
        $("#campfire-arrow").show();
    });
    $(".box:nth-child(3)").mouseleave(function() {
        $("#main-project").replaceWith('<p id="main-text">' + defaultMainText + '</p>');
        $("#main-sub-project").replaceWith('<p id="main-sub-text">' + defaultMainSubText + '</p>');
        $("#campfire-arrow").hide();
    });
});
