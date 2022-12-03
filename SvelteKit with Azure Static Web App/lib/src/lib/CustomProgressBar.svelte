<script lang="ts">
 
	export let progress = 50; 
 
</script>

<div class="progress-bar">
	<div class="progress-fill-bar" style="width: {progress}%">
		{#if progress > 2}
			<span class="progress-value"> {progress}% </span>
		{/if}
	</div>
	{#if progress <= 2}
		<span class="progress-value"> {progress}% </span>
	{/if}
</div>

<style>
	.progress-bar {
		width: 100%;
		height: 22px;
		transform: translate(0);
		display: flex;
		justify-content: center;
		background-color: #c1c1c1;
		border-radius: 6px;
		align-items: center;
	}
	.progress-fill-bar {
		background-color: #386965;
		height: 22px;
		border-radius: 6px;
		position: absolute;
		left: 0;
		z-index: 1;
		transform: translate(0);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.progress-value {
		z-index: 2;
		font-family: 'monospace';
		font-size: 10px;
		color: white;
	}
</style>
