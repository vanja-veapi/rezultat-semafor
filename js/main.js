window.addEventListener("load", function()
{
    const ArrowUp = "ArrowUp"; // Away result update
    const W = "KeyW"; // Home result update
    const ArrowDown = "ArrowDown"; // Away result delete
    const S = "KeyS"; // Home result delete
    const Restart = "KeyR" //When player hit the hoop

    var home = 0;
    var away = 0;
    var time = 24;

    //var audio = new Audio("../audio/boban.wav");

    var homeId = document.getElementById("home");
    var awayId = document.getElementById("away");
    var timeWatch = document.getElementById("time");


    homeId.innerText = home;
    awayId.innerText = away;

    setInterval(timer, 1000);

    function setScore(id, score)
    {
        id.innerText = score;
        if(score < 0)
        {
            score = 0;
            id.innerText = score;
        }
    }

    function timer()
    {
        time--;
        timeWatch.innerText = time;
        if(time == 0)
        {
            time = 24;
            //audio.play();
        }
    }

    addEventListener("keydown", function(e)
    {
        if(e.code === ArrowUp)
        {
            console.log("Pritisnuo si keyUp i povecao rezultat gostima");
            away++;
            setScore(awayId, away);
        }
        else if(e.code === W)
        {
            console.log("Pritisnuo si W i povecao rezultat domacem timu");
            home++
            setScore(homeId, home);
        }
        else if(e.code === ArrowDown)
        {
            away--;
            setScore(awayId, away);
            if(away < 0)
            {
                away = 0;
            }
            //In functtion it's same statemant, but don't work
        }
        else if(e.code === S)
        {
            home--;
            setScore(homeId, home);
            if(home < 0)
            {
                home = 0;
            }
        }
        else if(e.code === Restart)
        {
            time = 24;
        }
    })


});