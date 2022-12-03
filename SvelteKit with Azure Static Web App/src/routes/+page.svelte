<script lang="ts">
	import {CustomProgressBar} from "frontend-helpers";
	let a: number = 0;
	let b: number = 0;
	let op: string = 'add';
	let API_LOCATION = '/api/testapi';
    let result: string;


	async function callAPI() {
		console.log('callAPI', a, b, op);

		let payload = {
			a: a,
			b: b,
			op: op
		};

		let resp = await fetch(API_LOCATION, {
			method: 'POST',
			mode: 'same-origin',
			credentials: 'include',
			redirect: 'follow',
			body: JSON.stringify(payload)
		});

        if(resp.ok){
            let data = await resp.json();
            result = data.val;
        }
        else{
            result = `ERROR: ${resp.statusText}`;
        }
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="number" bind:value={a} placeholder="A" />
<input type="number" bind:value={b} placeholder="B" />
<select bind:value={op}>
	<option value="add">Add</option>
	<option value="mul">Multiply</option>
</select>
<button on:click={callAPI}>Do op</button>
{#if result}
    Result: {result}

{/if}

<CustomProgressBar progress={34} />
