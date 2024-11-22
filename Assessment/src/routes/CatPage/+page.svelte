<script>
    import Meow from "$lib/SoundEffects/Felis_silvestris_catus.ogg.mp3"
    import "./styles.css";
    let Playback = new Audio(Meow);
    function RandomInt(max)
    {
        return Math.floor(Math.random() * max);
    }
    
    
    function BeginCatTime()
    {
        document.body.style.backgroundImage = "url('https://placecats.com/800/400?fit=contain&position=top')"
    }
    function ExitCatTime()
    {
        Playback.play();
        Playback.addEventListener("ended", (event) => 
        {
            location.href = "./Home"
        })
    }
</script>
<h2 class="CatTime?">CatTime?</h2>
<button class="Start CatTime" on:click={BeginCatTime}>YES</button>
<button class="QuitOut" on:click={ExitCatTime}>nah</button>
<div id="ImgArea"></div>