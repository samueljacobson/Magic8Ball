function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function Fortune() {


    wait(2000);
    var fortunes = ["It is certain", "Don't count on it", "It is decidedly so", "Better not tell you now", "My sources say no"];
    var randFortune = Math.round(Math.random() * (fortunes.length-1));
    document.getElementById("fortuneText").innerHTML = fortunes[randFortune];

    wait(5000);
    document.getElementById("fortuneText").visibility = "hidden";
}