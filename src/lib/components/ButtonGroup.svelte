<script>
    export let type = "horizontal";
</script>

<div class="buttonGroup buttonGroup--type-{type}">
    <slot/>
</div>

<style lang="scss">
  .buttonGroup {
    display: flex;
    align-items: flex-start;
    gap: 16px;

    &--type-stacked {
      flex-direction: column;
      width: 100%;
    }
  }


  @media screen and (max-width: 700px) {
    .buttonGroup {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      &--type-stacked {
        flex-direction: column;
        width: 100%;
      }
    }
  }
</style>
