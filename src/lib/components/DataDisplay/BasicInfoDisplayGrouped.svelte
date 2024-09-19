<script>
</script>

<div class="infoDisplayGroup">
    <slot/>
</div>

<style lang="scss">
  .infoDisplayGroup {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 8px;
    align-self: stretch;
    flex-wrap: wrap;
    user-select: none;
    -webkit-user-drag: none;
  }
</style>
