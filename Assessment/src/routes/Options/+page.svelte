<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import NavBar from "$lib/NavBar.svelte";
</script>
<NavBar/>
<p>Testing cookies {data.visited ? 'Visited = true' : 'Visited = False'}! </p>