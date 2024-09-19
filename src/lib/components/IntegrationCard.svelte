<script>
    import Chip from "./Chip.svelte";

    export let supportsV3 = false;
    export let supportsV4 = false;
    export let type = 'Wrapper';
    export let author = null;
    export let title = null;
    export let language = null;
    export let url = null;
    import {IconArrowDownLeft, IconInfoCircle} from '@tabler/icons-svelte';
    import Divider from "./Divider.svelte";
</script>


<a href="{url}" class="cardIntegrations">
    <div class="cardIntegrations__metaWrapper">
        <div class="cardIntegrations__meta">
            <div class="cardIntegrations__title">
                <div class="cardIntegrations__languageBlip cardIntegrations__languageBlip--{language}"></div>
                <p>{title}</p>
            </div>

            <div class="cardIntegrations__sub">
                <p>{language}</p>
                <Divider />
                <p class="cardIntegrations__author">By <span>{author}</span></p>
            </div>
        </div>

        <span class="icon"><IconArrowDownLeft class="external-link" size={20} stroke={1.5} /></span>
    </div>
    <div class="cardIntegrations__versions">
        {#if supportsV3}
            <Chip type="outline" size="small">v3</Chip>
        {/if}
        {#if supportsV4}
            <Chip type="outline-gradient-light" size="small">v4</Chip>
        {/if}
    </div>
</a>

<style lang="scss">
.cardIntegrations {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  width: fit-content;
  min-width: 200px;
  max-width: 250px;

  background: var(--background-300);
  border: 1px solid var(--background-400);
  border-radius: var(--border-radius-large);
  flex: 1;
  transition: all 0.5s ease;

  &__metaWrapper {
    display: grid;
    grid-template-columns: auto 20px;
    padding: 0;
    gap: 8px;
    width: 100%;

    .icon {
      transition: all 0.5s ease-in-out 0.1s;
    }
  }

    &__title {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--typography-100);

        p {
          margin: 0;
        }
    }

    &__meta {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        color: var(--typography-300);
    }

    &__sub {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;

        p {
          margin: 0;
          text-transform: capitalize;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 80px;
        }
    }

    &__author {
        color: var(--typography-100);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 50px;
    }

    &__languageBlip {
    height: 10px;
    width: 10px;
    border-radius: 100%;

        &--php {
          background: #8A91BD;
        }

        &--javascript {
          background: #F0DB4F;
        }

        &--typescript {
          background: #F0DB4F;
        }

        &--nodejs {
          background: #8BC500;
        }

        &--dart {
          background: #00B4AB;
        }

        &--go {
          background: #00ADD8;
        }

        &--elixir {
          background: #4e2a8e;
        }

        &--kotlin {
          background: #f85d06;
        }

        &--java {
          background: #ED8B00;
        }

        &--dotnet {
          background: #68217A;
        }

        &--python {
          background: #20639A;
        }

        &--ruby {
          background: #D22401;
        }
    }


  &:hover {
    background: var(--background-400);
    border: 1px solid var(--background-500);

    .cardIntegrations__metaWrapper {
      .icon {
        transform: translate(5px, -5px);
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .cardIntegrations {
    min-width: unset;
    max-width: unset;
    width: 100%;
    flex-direction: row;
    flex: unset;

    &__versions {
      display: flex;
      gap: 8px;
    }
  }
}
</style>
