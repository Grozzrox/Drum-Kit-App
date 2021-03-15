const w_drum = document.querySelector(".w");
const sounds = document.querySelectorAll("audio");

function play(i) {
    sounds[i].play();
}

function keypress(e) {
    console.log(e.code);

    if (e.code === 'KeyW') {
        play(0);
    }
    else if (e.code === 'KeyA') {
        play(1);
    }
    else if (e.code === 'KeyS') {
        play(2);
    }
    else if (e.code === 'KeyD') {
        play(3);
    }
    else if (e.code === 'KeyJ') {
        play(4);
    }
    else if (e.code === 'KeyK') {
        play(5);
    }
    else if (e.code === 'KeyL') {
        play(6);
    }
}

document.addEventListener("keydown", keypress);