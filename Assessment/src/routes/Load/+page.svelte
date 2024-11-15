<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import NavBar from '../../lib/NavBar.svelte';
</script>
<NavBar/>
<p>{data.GameInProgress ? 'Game Is In Progress' : 'No Game Found'}</p>