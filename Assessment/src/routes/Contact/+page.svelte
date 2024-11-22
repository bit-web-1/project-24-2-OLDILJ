
<script>
    import Head from "$lib/Header.svelte";
    import Bar from "$lib/NavBar.svelte";
    import "$lib/TextStyling.css"
    import "./styles.css";
    export let form;
</script>
<Head/>
<Bar/>

<h2>Contact us</h2>

<h3>Location</h3>
<p>Street Address: 222, location street, UnderGround, 2, Zealandia</p>
<p>&nbsp;</p>
<p>Main Phone Number: 555-212-312-123</p>
<table>
    <thead>
        <tr>
            <th scope="col">Department</th>
            <th scope="col">Prefered Contact Method</th>
            <th scope="col">Email</th>
        </tr>
    </thead>
    <thead>
        <tr>
            <th scope="row">Across the road</th>
            <td>Smoke Signals</td>
            <td>Road@hotmail.com</td>
        </tr>
        <tr>
            <th scope="row">Up the road</th>
            <td>Knock on the door</td>
            <td>UpTheRoad@yahoo.com</td>
        </tr>
        <tr>
            <th scope="row">Down the road</th>
            <td>Complete The Secret Handshake</td>
            <td>Down@Netscape.com</td>
        </tr>
        <tr>
            <th scope="row">In the road</th>
            <td>Free entry</td>
            <td>Tarmac@mail.com</td>
        </tr>
    </thead>
</table>
<h3>Contact Details</h3>
<p class="Centered">In case we want to contact you at a later date please enter your details below.</p>
<form method="POST">
    <label for="fName">First Name:</label>
    <input type="text" name="fName" id="fName">
    <label for="lName">Last Name:</label>
    <input type="text" name="lName" id="lName">
    <label for="PhoneNumber">Phone Number:</label>
    <input type="tel" name="PhoneNumber" id="PhoneNumber" placeholder="555-555-555">
    <input type="submit" value="Submit">
</form>
<p class="Confirmation"></p>