<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<p>{data.GameInProgress ? 'Game Is In Progress' : 'No Game Found'}</p>