<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import CharSelect from '../../lib/CharSelect.svelte';
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>