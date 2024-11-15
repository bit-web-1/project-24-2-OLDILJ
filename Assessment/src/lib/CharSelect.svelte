
<script>
    import Char1 from '$lib/Characters/Char1.png';
    import Char2 from '$lib/Characters/Char2.png';
    import Char3 from '$lib/Characters/Char3.png';
    function Test()
    {
        console.log(this);
        
    }
    
</script>
<label>
    <input type="radio" name="CharSelect" value="Char1" on:click={Test}/>
    <img src={Char1} alt="Char1">
</label>
<label>
    <input type="radio" name="CharSelect" value="Char2" on:click={Test}/>
    <img src={Char2} alt="Char2">
</label>
<label>
    <input type="radio" name="CharSelect" value="Char3" on:click={Test}/>
    <img src={Char3} alt="Char3">
</label>
<div class="Char1">
    <p>
        Light Weight. High Speed Low Attack
    </p>
</div>
<div class="Char2">
    <p>
        Heavy Weight. High Attack Low Speed
    </p>
</div>
<div class="Char3">
    <p>
        ??? Weight. ??? Attack ??? Speed
    </p>
</div>
<style>
div
{
    justify-self: center;
}
</style>