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


var imgCase = 1;

setInterval(function () {

    var date = new Date();
    var seconds = date.getSeconds();
    if (imgCase == 1){
        if (seconds % 9 == 1) {
            img(1);
        } else if (seconds % 9 == 2) {
            img(2);
        } else if (seconds % 9 == 3) {
            img(3);
        } else if (seconds % 9 == 4) {
            img(4);
        } else if (seconds % 9 == 5) {
            img(5);
        } else if (seconds % 9 == 6) {
            img(6);
        } else if (seconds % 9 == 7) {
            img(7);
        } else if (seconds % 9 == 8) {
            img(8);
        } else if (seconds % 9 == 0) {
            img(9);
        }
    }
    else if (imgCase == 2){
        if (seconds % 14 == 1) {
            img(1);
        } else if (seconds % 14 == 2) {
            img(2);
        } else if (seconds % 14 == 3) {
            img(3);
        } else if (seconds % 14 == 4) {
            img(4);
        } else if (seconds % 14 == 5) {
            img(5);
        } else if (seconds % 14 == 6) {
            img(6);
        } else if (seconds % 14 == 7) {
            img(7);
        } else if (seconds % 14 == 8) {
            img(8);
        } else if (seconds % 14 == 9) {
            img(9);
        } else if (seconds % 14 == 10) {
            img(10);
        } else if (seconds % 14 == 11) {
            img(11);
        } else if (seconds % 14 == 12) {
            img(12);
        } else if (seconds % 14 == 13) {
            img(13);
        } else if (seconds % 14 == 0) {
            img(14);
        }
    }
}, 1000);



function img(num) {
    var img = document.getElementById("pjPhoto");
    img.setAttribute("src", "img/"+imgCase+"/" + num + ".jpg");
    return num += 1;

}

function nextImg(idx){
    if (idx) {
        if (imgCase == 2) return;
        imgCase++;
    } else {
        if (imgCase == 1) return;
        imgCase--;
    }
    
    nextExplain(imgCase);

    var photoCount = document.getElementById("photoCount");
    photoCount.innerText = "(" + imgCase + "/2)";

}

function nextExplain(num){
    var cv = document.getElementById("cv");
    var pjbl = document.getElementById("pjbl");

    if(num == 1){
        cv.style.display = "block";
        pjbl.style.display = "none";
    } else if (num == 2){
        cv.style.display = "none";
        pjbl.style.display = "block";
    }

}