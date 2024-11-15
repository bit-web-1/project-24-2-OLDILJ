<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    import NavBar from "$lib/NavBar.svelte";
</script>
<NavBar/>
<h3>What is this?</h3>
<p>The purpose of this website was to create a little battle system using different api's for the main characters stats with a selection at the beginning to change how the characters are improved via api details</p>
<h3>Why is it so barebones</h3>
<p>Sveltekit sucks. Transfering data between different pages is a massive pain in the ass and the error messages just send you on wild goose chases leaving you with little to no way to figure out the mistake.</p>
<p>on top of that the tutorials suck as they explain a concept halfway then stop and swap to another variation of the same thing without fully explaining every detail about it. They introduced databases just expecting the beginning user to understand how it works from first glance</p>