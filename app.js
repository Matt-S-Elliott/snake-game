var player = {
    ID : $("#player"),
    position : {x:0,y:0}
}
var moveSpeed = 75;

$(document).keyup(function (event) {
    keyPressed = event.key;
    console.log(keyPressed);
    if (keyPressed === "ArrowUp") {
        player.ID.animate({top: '-=20px'}, moveSpeed);
        player.position.y--;
    }
    else if (keyPressed === "ArrowRight") {
        player.ID.animate({left: '+=20px'}, moveSpeed);
        player.position.x++;
    }
    else if (keyPressed === "ArrowDown") {
        player.ID.animate({top: '+=20px'}, moveSpeed);
        player.position.y++;
    }
    else if (keyPressed === "ArrowLeft") {
        player.ID.animate({left: '-=20px'}, moveSpeed);
        player.position.x--;
    }
    console.log(player.position);
})