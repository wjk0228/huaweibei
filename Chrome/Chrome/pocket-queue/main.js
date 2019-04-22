$(document).ready(function () {
    $(".hidden-nav").hide();
        $(".user").click(function () {
            $(".hidden-nav").fadeToggle("fast","linear");

        })
    $(".buttons").hide();
        $(".main-userpage").mouseover(function () {
        $(this).children(".userpage-source").children("ul").fadeIn("1000");
        $(this).children(".userpage-source").children("ul").stop(true,true);

    });
    $(".main-userpage").mouseout(function () {
        $(this).children(".userpage-source").children("ul").fadeOut("1000");
        $(this).children(".userpage-source").children("ul").stop(true,true);
    });
});