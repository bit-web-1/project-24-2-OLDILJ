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
        display: inline-block;
        width: 80%;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 2%;
    }
    img
    {
        float: right;
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
        display: inline-block;
        transition: all 1s ease-in-out;
        vertical-align: bottom;
    }
    h1:active
    {
        transform: scale(2,4);
        
    }
</style>