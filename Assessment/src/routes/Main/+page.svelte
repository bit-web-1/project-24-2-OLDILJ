<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>