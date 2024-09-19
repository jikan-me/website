<script>
    import Chip from "./Chip.svelte";

    export let title = null;
    export let summary = null;
    export let imageUrl = null;
    export let url = null;

</script>

<a href="{url}" target="_blank" class="cardShowcase">
    <div class="cardShowcase__image"><img src="{imageUrl}" alt="{title}" /></div>
    <div class="cardShowcase__meta">
        <strong class="cardShowcase__title">{title}</strong>
        <p class="cardShowcase__summary">{summary}</p>
    </div>
</a>

<style lang="scss">
.cardShowcase {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: var(--border-radius-large);
  transition: all 0.5s ease;

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 8px;
  }


  &__image {
    height: 200px;
    width: 300px;
    border-radius: var(--border-radius-large);
    background: var(--background-300);
    overflow: hidden;
    transition: all 1s ease;

    img {
      object-fit: cover;
      height: 100%; width: 100%;
      transition: all 2s ease-in-out;
    }
  }

  &__title {
    max-width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__summary {
    text-overflow: ellipsis;
    margin: 0;
    font-size: 12px;
    color: var(--typography-300);
  }


  &:hover {
    background: var(--background-300);


    .cardShowcase__image img {
      transform: scale(1.1, 1.1);
    }
  }
}

@media screen and (max-width: 1000px) {
  .cardShowcase {
    width: 100%;
    max-width: 500px;

    &__image {
      width: 100%;
      height: 250px;
    }
  }

}
</style>
