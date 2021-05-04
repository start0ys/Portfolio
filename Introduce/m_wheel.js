function move(num) {
    if (num == 0) {
        var loc = "introduce";
    }
    else if (num == 1) {
        var loc = "aboutMe";
    }
    else if (num == 2) {
        var loc = "skills";
    }
    else if (num == 3) {
        var loc = "project";
    }

    var location = document.querySelector("#" + loc).offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
}



function mouse_move(num) {

    if (event.wheelDelta >= 120) {
        if (num == 1 || num ==0) {
            move(0);
        }
        else if (num == 2) {
            move(1);
        }
        else if (num == 3) {
            move(2);
        }
    }
    else if (event.wheelDelta <= -120) {
        if (num ==0) {
            move(1);
        }
        else if (num == 1) {
            move(2);
        }
        else if (num == 2) {
            move(3);
        }
        else if (num == 3) {
            move(0);
        }
    }

}