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
        justify-items: center;
    }
    img
    {
        padding-left: 1%;
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
        text-align: center;
        display: inline-block;
        vertical-align:middle;
    }
</style>