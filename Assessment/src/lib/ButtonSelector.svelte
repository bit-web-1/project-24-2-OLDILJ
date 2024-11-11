<div class="wrapper">
    <a href="/Main" class="New">New</a>
    <p class="Load">Load</p>
    <p class="Options">Options</p>
    <p class="Prior">Prior Runs</p>
</div>
    
<style>
    a
    {
        text-decoration: none;
        transition: 1s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.25s infinite ease-out;
        animation-play-state: paused;
    }
    .wrapper
    {
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        overflow: hidden;
    }
    .New
    {
        margin-top: 2%;
        display: flex;
        justify-content: left;
        margin-left:15em;
        margin-right: 13em;
        float:left;
        font-size: 2em;
        
    }
    .Load
    {
        display: flex;
        justify-content: right;
        margin-right: 13em;
        float:left;
        font-size: 2em;
        
    }
    .Options
    {
        margin-top: 10%;
        display: flex;
        justify-content: left;
        margin-left:15em;
        margin-right: 11.8em;
        clear: both;
        float: left;
        font-size: 2em;
    }
    .Prior
    {
        margin-top: 10%;
        display: flex;
        justify-content: left;
        margin-right: 12em;
        float: left;
        font-size: 2em;
    }
    p
    {
        
        transition: 1s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.25s infinite ease-out;
        animation-play-state: paused;
    }
    a:hover
    {
        animation-play-state: running;
    }
    a:not(:hover)
    {
        transition: 1s cubic-bezier(0.075, 1, 0.765, 1);
        animation: flicker 0.0s infinite ease-out;
        animation-play-state: paused;
        color: brown 
    }
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