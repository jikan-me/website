<script>
    export let type = "circle";
</script>

<div class="divider divider--type-{type}" />

<style lang="scss">
    .divider {
      display: block;
      &--type-circle {
        width: 4px;
        height: 4px;
        border-radius: 100px;
        background: var(--background-500);
      }

      &--type-line {
        width: 100%;
        height: 0.5px;
        background: var(--background-300);
      }
    }
</style>