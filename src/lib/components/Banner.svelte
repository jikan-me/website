<script>
    export let type = 'info';
    export let size = 'small';
    import { IconInfoCircle } from '@tabler/icons-svelte';
</script>

<div class="banner banner--type-{type} banner--size-{size}">
    {#if type === "info"} <IconInfoCircle size={20} stroke={1.5} /> {/if}
    <p><slot /></p>
</div>

<style lang="scss">
  .banner {
    display: grid;
    grid-template-columns: 32px 1fr;
    padding: 8px 32px 8px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: var(--border-radius-small);
    color: var(--typography-200);
  }

  .banner--size-small {
    font-size: var(--type-size-body-assistive);
  }

  .banner--type-info {
    border-radius: 8px;
    background: var(--background-100, #13151A);
  }
</style>
