<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import "./Styles.css";
    const imgUrl = new URL ("..\..\lib\Characters\Char1.png", import.meta.url).href
    import Char1 from '$lib/Characters/Char1.png';
    import Char2 from '$lib/Characters/Char2.png';
    import Char3 from '$lib/Characters/Char3.png';
    import CharSel from "$lib/CharSelect.svelte";
    import NavBar from "$lib/NavBar.svelte";
</script>
<h1 class="Title">Select Your Character</h1>





<form method="POST">
    <div class="Wrapper">
        <CharSel/>
    </div>
</form>
