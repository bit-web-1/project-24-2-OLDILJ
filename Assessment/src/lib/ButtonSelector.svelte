<div class="wrapper">
    <a href="/New" class="New">New</a>
    <a href="/Load" class="Load">Load</a>
    <a href="/Options" class="Options">Options</a>
    <a href="/PriorRuns"class="Prior">Prior Runs</a>
    <a href="/About" class="About">About</a>
</div>

<style>
    .wrapper
    {
        display: grid;
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        gap: 10em , 5em;
    }
    .New
    {
        justify-self: center;
        font-size: 2em;
        
    }
    .Load
    {
        justify-self: center;
        font-size: 2em;   
    }
    .Options
    {
        justify-self: center;
        font-size: 2em;
    }
    .Prior
    {
        justify-self: center;
        font-size: 2em;
    }
    .About
    {
        justify-self: center;
        font-size: 2em;
    }
    a
    {
        text-decoration: none;
        transition: 1s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.5s infinite ease-out;
        animation-play-state: paused;
    }
    p
    {
        
        transition: 2s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.5s infinite ease-out;
        animation-play-state: paused;
    }   
    a:is(:focus, :hover)

    {   
        
        animation-play-state: running;
    }

    a:not(:hover, :focus)
    {
        animation: flicker 0.0s infinite ease-out;
        animation-play-state: paused;
        color: brown 
    }
    /* :is(a:not(:hover)),
    :is(a:not(:focus))  
    {
        transition: 2s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.0s infinite ease-out;
        animation-play-state: paused;
        color: brown 
    } */


    p:hover
    {
        animation-play-state: running;
    }
    p:not(:hover)
    {
        transition: 1s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.0s infinite ease-out;
        animation-play-state: paused;
        color: brown
    }
    @keyframes flicker
    {
        0%
        {
            color: brown
        }
        50%
        {
            color: rgb(199, 78, 48);
        }
        100%
        {
            color:rgb(255, 166, 0);
        }
    }

</style>
