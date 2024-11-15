<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import CharSelect from '../../lib/CharSelect.svelte';
    import * as db from '$lib/database.js';
    var CurRunChar = db.getChar();
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<p>You are {CurRunChar}</p>