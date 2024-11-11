<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<p>Testing cookies {data.visited ? 'Visited = true' : 'Visited = False'}! </p>