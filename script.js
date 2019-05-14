var currentPlayer = "player1";

$(".column").on("click", function(e) {
    var slotsInColumns = $(e.currentTarget).find(".slot");

    for (var i = 5; i >= 0; i--) {
        if (
            !slotsInColumns.eq(i).hasClass("player1") &&
            !slotsInColumns.eq(i).hasClass("player2")
        ) {
            slotsInColumns.eq(i).addClass(currentPlayer);
            break;
        }
    }

    if (checkForVictory(slotsInColumns)) {
        showVictoryMessage();
        stopGame();
        return;
    } else if (checkForVictory($(".row" + i))) {
        showVictoryMessage();
        stopGame();
        return;
    } else {
        diagonal();
    }

    switchPlayers();
});

function checkForVictory(slots) {
    var str = ";";

    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            str += "v";
        } else {
            str += "l";
        }
    }
    if (str.indexOf("vvvv") > -1) {
        return true;
    }
}
var slots = $(".slot");
function diagonal() {
    for (var x = 0; x < victories.length; x++) {
        if (
            slots.eq(victories[x][0]).hasClass(currentPlayer) &&
            slots.eq(victories[x][1]).hasClass(currentPlayer) &&
            slots.eq(victories[x][2]).hasClass(currentPlayer) &&
            slots.eq(victories[x][3]).hasClass(currentPlayer)
        ) {
            showVictoryMessage();
            stopGame();
        }
    }
}
function switchPlayers() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}

function showVictoryMessage() {
    if (currentPlayer == "player1") {
        $(".ballv").addClass("first");
        $(".ballv").css("visibility", "visible");
        $(".ballv").css("left", "50" + "px");
        $("body").css("backgroundColor", "rgba(0,0,0,0.7)");
        $(".hole").css("backgroundColor", "rgba(0,0,0,0.7)");
    }
    if (currentPlayer == "player2") {
        $(".ballv").addClass("second");
        $(".ballv").css("visibility", "visible");
        $(".ballv").css("left", "1050" + "px");
        $("body").css("backgroundColor", "rgba(0,0,0,0.7)");
        $(".hole").css("backgroundColor", "rgba(0,0,0,0.7)");
    }
}

function stopGame() {
    $(".column").off();
}

$(".ballv").on("click", function(e) {
    location.reload(true);
});

var victories = [
    [0, 7, 14, 21],
    [6, 13, 20, 27],
    [12, 19, 26, 33],
    [18, 25, 32, 39],
    [36, 31, 26, 21],
    [30, 25, 20, 15],
    [24, 19, 14, 9],
    [18, 13, 8, 3],
    [1, 8, 15, 22],
    [7, 14, 21, 28],
    [13, 20, 27, 34],
    [19, 26, 33, 40],
    [37, 32, 27, 22],
    [31, 26, 21, 16],
    [25, 20, 15, 10],
    [19, 14, 9, 4],
    [2, 9, 16, 23],
    [8, 15, 22, 29],
    [14, 21, 28, 35],
    [20, 27, 34, 41],
    [38, 33, 28, 23],
    [32, 27, 22, 17],
    [26, 21, 16, 11],
    [20, 15, 10, 5]
];

var balls = $(".ball");
var start = $(".start");
var board = $(".board");

balls.on("mouseenter", function(e) {
    var rgb = rgbColors();
    var clr = function() {
        var c = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        return c;
    };
    $(e.currentTarget).css("backgroundColor", clr);
});

start.on("mouseenter", function(e) {
    var rgb = rgbColors();
    var clr = function() {
        var c = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        return c;
    };
    $(e.currentTarget).css("color", clr);
});

start.on("click", function() {
    start.css("visibility", "hidden");
    board.css("visibility", "visible");
    board.css("transform", "translateY(0)");
});

function rgbColors() {
    var rgbArr = [];
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        rgbArr.push(r);
    }
    return rgbArr;
}
