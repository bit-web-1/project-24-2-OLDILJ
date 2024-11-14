<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import "./Styles.css";
    const imgUrl = new URL ("..\..\lib\Characters\Char1.png", import.meta.url).href
    import Char1 from '$lib/Characters/Char1.png';
    import Char2 from '$lib/Characters/Char2.png';
    import Char3 from '$lib/Characters/Char3.png';
</script>
<h1 class="Title">Select Your Character</h1>

<div class="Wrapper">
    <a href="/Main"><img src={Char1} alt="Char1" class="Char1"></a>
    <a href="/Main"><img src={Char2} alt="Char2" class="Char2"></a>
    <a href="/Main"><img src={Char3} alt="Char3" class="Char3"></a>
</div>