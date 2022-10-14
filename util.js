
function rand(min, max) 
{	
    if (typeof min === "undefined" || typeof max === "undefined")
    {
        min = 0;
        max = 1;
    }

    return Math.random() * (max - min) + min;	
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function probDo(x) 
{
    return Math.random() < x;
}

function getTunedSequence(steps=16)
{
    var seq = [];
    for (var i=0;i<steps;i++)
    {
        var f = 0;
        var r = rand();
        if (r < 0.1)
        {
            f = 1;
        }
        else if (r < 0.8)
        {
            f = 0;
        }
        else
        {
            f = rand();
        }
        seq[i] = f;
    }
    return seq;
}