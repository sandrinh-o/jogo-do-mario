const mario = document.querySelector(".mario"),
pipe = document.querySelector(".pipe"),
start = document.querySelector(".start"),
gameOver = document.querySelector(".game-over"),
startGame = () => {
    pipe.classList.add("pipe-animation"),
    start.computedStyleMap.display = "none"
},
restartGame = () => {
    gameOver.computedStyleMap.display = "none",
    pipe.computedStyleMap.left = "",
    pipe.computedStyleMap.right = "0",
    mario.src = "img/mario.gif",
    mario.computedStyleMap.width = "100px",
    mario.computedStyleMap.bottom = "0"
},
jump = () => {
    mario.classList.add("jump"),
    setTimeout(() => {
        mario.classList.remove("jump")
    },
    800)
},
loop = () => {
    setInterval(() => {
        const a = pipe.offsetLeft,
        b = window.getComputedStyle(mario).bottom.replace("px", " ");
        if (120 >= a && 0 < a && 80 > b) {
            pipe.classList.remove(".pipe-animation"),
            pipe.style.left = `$ {
                a
            }
            px`,
            mario.classList.remove(".jump"),
            mario.style.bottom = `$ {
                b
            }
            px`,
            mario.src = "img/game-over.gif",
            mario.style.width = "80px",
            mario.style.marginLeft = "50px",
            function() {
                audioStart.pause()
            } (),
            audioGameOver.play(),
            setTimeout(function() {
                audioGameOver.pause()
            },
            7e3),
            gameOver.style.display = "flex",
            clearInterval(loop)
        }
    },
    10)
};
loop(),
document.addEventListener("keypress", a => {
    const b = a.key;
    " " === b && jump()
}),
document.addEventListener("touchstart", a => {
    a.touches.length && jump()
}),
document.addEventListener("keypress", a => {
    const b = a.key;
    "Enter" === b && startGame()
});
