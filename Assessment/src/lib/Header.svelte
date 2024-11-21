<script>
    import Mascot from "$lib/Images/TransparentMascotGuy.png";
</script>
<div class="FloatContainer">
    <h1>Normal News</h1>
    <img src={Mascot} alt=""/>
</div>
<style>
    .FloatContainer
    {
        width: 80%;
        padding-left: 5%;
        padding-bottom: 2%;
    }
    img
    {
        transition: all 1s ease-in-out;
        padding-left: 5%;
        vertical-align: middle;
    }
    img:hover
    {
        image-rendering:pixelated;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    img:active
    {
        image-rendering:pixelated;
        transform:rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    h1
    {
        transition: all 1s ease-in-out;
        display: inline-flex;
        vertical-align:middle;
    }
    h1:active
    {
        transform: scale(2,4);
        
    }
</style>