<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import CharSelect from '../../lib/CharSelect.svelte';
    import * as db from '$lib/database.js';
    var CurRunChar = db.CurRunChar;
    var userid = db.userid;
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<p>You are {CurRunChar} And You are User: {userid} </p>