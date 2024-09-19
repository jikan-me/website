<script>
    import Chip from "./Chip.svelte";
    import {IconStar,IconHash} from "@tabler/icons-svelte";
    import Divider from "./Divider.svelte";
    import string from "../helpers/string.js";
    import {onMount} from "svelte";
    import tilt from "./tilt.js";
    export let mal_id = 0;
    export let imageUrl = "";
    export let rating = "";
    export let score = 0;
    export let scoredBy = 0;
    export let title = "";
    export let season = 0;
    export let year = 0;
    export let genres = [];
    export let status = "";
    export let episodes = 0;
    export let rank = 0;
    export let skeleton = false;
    export let cardExit = false;

    $: statusClass = status
    $: isCardTransitioning = cardExit ? 'cardAnime--exit' : '';

    onMount(() => {
        switch (status) {
            case "Finished Airing":
                statusClass = "animeStatus-finished";
                break;
            case "Not yet aired":
                statusClass = "animeStatus-upcoming"
                break;
            case "Currently Airing":
                statusClass = "animeStatus-airing";
                break;
        }
    });
</script>

{#if skeleton}
    <div class="cardAnime cardAnime--skeleton {isCardTransitioning}"></div>
{:else}
    <a
        href="https://api.jikan.moe/v4/anime/{mal_id}"
        class="cardAnime {isCardTransitioning}"
        target="_blank"
        use:tilt={{scale:1, reverse:true}}
    >
        <div class="cardAnime__cover">
            <img src="{imageUrl}" title="{title}" />
            <div class="cardAnime__overlay">
                <div class="cardAnime__rated">
                    <small>{rating === null ? "" : string.ratedToSmall(rating)}</small>
                </div>
            </div>
        </div>
        <div class="cardAnime__body">
            <Chip size="small" type="{statusClass}">
                {string.capitalize(status)}
            </Chip>
            <div class="cardAnime__meta">
                {#if season !== null}
                    <small>{string.capitalize(season)} {year}</small>
                {/if}
                {#if season !== null && episodes !== null }
                    <Divider type="circle" />
                {/if}
                {#if episodes !== null}
                    <small>{episodes} episodes</small>
                {/if}
            </div>
            <p class="cardAnime__title">{title}</p>
            <div class="cardAnime__rating">
                {#if score !== null}
                <div class="cardAnime__score">
                    <div>
                        <IconStar stroke={1.5} size={16} />
                        {score}
                    </div>
                    <small>{scoredBy} users</small>
                </div>
                {/if}
                <div class="cardAnime__rank">
                    <div>
                        {#if rank !== null}
                            <IconHash stroke={1.5} size={16} />
                            {rank}
                        {:else}
                            Unranked
                        {/if}
                    </div>
                    <small>Ranking</small>
                </div>
            </div>
            <div class="cardAnime__genres">

                {#if genres.length > 2}
                    {#each genres.slice(0,2) as genre}
                        <Chip size="small" length="small" type="flat">{genre.name}</Chip>
                    {/each}
                    <Chip size="small" type="flat">+{genres.length-genres.slice(0,2).length}</Chip>
                {:else}
                    {#each genres as genre}
                        <Chip size="small" length="small" type="flat">{genre.name}</Chip>
                    {/each}
                {/if}
            </div>
        </div>
    </a>
{/if}

<style lang="scss">
    .cardAnime {
      position: relative;
      display: inline-flex;
      padding: 8px;
      align-items: flex-start;
      gap: 16px;
      background: linear-gradient(var(--background-100), var(--background-100)) padding-box,
      linear-gradient(to left,
                      transparentize(#1847B1, 0.8),
                      transparentize(#A1C4F7, 0.8)
      ) border-box;
      border: 1px solid transparent;
      border-radius: var(--border-radius-large);
      user-select: none;
      -webkit-user-drag: none;
      transition: all 0.25s ease;
      overflow: hidden;
      height: 200px;
      min-width: 300px;

      &--skeleton {
        border-radius: 12px;
        border: 1px solid #A1C4F7;
        background: linear-gradient(108deg, #1F2635 2.12%, rgba(31, 38, 53, 0.00) 100%);
        border: 1px solid var(--background-600);
        height: 200px;
        width: 300px;
        overflow: hidden;
      }

      &--exit {
        filter: blur(10px) grayscale(1);
        transform: scale(0.95, 0.95);
        opacity: 0;
      }

      &__cover {
        height: 200px;
        width: 140px;
        overflow: hidden;
        position: relative;
        border-radius: var(--border-radius-small);

        img {
          height: inherit;
          width: inherit;
          object-fit: cover;
          border-radius: var(--border-radius-small);
          -webkit-user-drag: none;
          user-select: none;
        }
      }

      &__meta {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      &__body {
        display: flex;
        max-width: 200px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      &__title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-self: stretch;
        overflow: hidden;
        color: var(--typography-100);
        text-overflow: ellipsis;
        margin: 10px 0;
        max-width: 180px;
        line-height: 1.25;
      }

      &__rating {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
      }

      &__score, &__rank {
        small {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          color: var(--typography-300);
          text-overflow: ellipsis;
        }

        >div {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }

      &__rank {
        >div {
          gap: unset;
        }
      }

      &__genres {
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
      }

      &__overlay {
        display: flex;
        width: 100%;
        padding: 24px 8px 12px 12px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: absolute;
        bottom: -1px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
      }

      &__rated {
        color: var(--typography-100);
        border-left: 1px solid var(--primary-100);
        padding-left: 12px;
        display: flex;
        align-items: center;
      }
    }
</style>