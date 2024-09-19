<script>
import JetbrainsLogo from "../images/jetbrains.svg";
import Divider from "./Divider.svelte";
import {onMount} from "svelte";
import supporters from "../../data/supporters.js";

let marquee;

onMount(() => {
    const clone = marquee.innerHTML;
    const firstElement = marquee.children[0];

    let i = 0;
    marquee.insertAdjacentHTML('beforeend', clone);
    marquee.insertAdjacentHTML('beforeend', clone);

    setInterval(() => {
        firstElement.style.marginLeft = `-${i}px`;

        if (i > firstElement.clientWidth) {
            i = 0;
        }

        i += 0.2;
    }, 0);
});


</script>

<footer class="shoutouts" bind:this={marquee}>
    <div class="marquee">
        {#if supporters.sugoi_supporter.length > 0}
            <p>Sugoi Supporters</p>
        {/if}
        {#each supporters.sugoi_supporter.sort() as supporter}
            <code>{supporter}</code>
        {/each}
        <Divider type="circle"/>

        {#if supporters.supporter.length > 0}
            <p>Supporters</p>
        {/if}
        {#each supporters.supporter.sort() as supporter}
            <code>{supporter}</code>
        {/each}
        <Divider type="circle"/>

        {#if supporters.supporter.length > 0}
            <p>Jikan's development is powered by</p>
        {/if}
        {#each supporters.powered_by as poweredBy}
            <a href={poweredBy.url} target="_blank">
                <img src={JetbrainsLogo} height={35} width={35} alt={poweredBy.name} />
                <code>{poweredBy.name}</code>
            </a>
        {/each}
        <Divider type="circle"/>
    </div>
</footer>

<style lang="scss">
    .shoutouts {
      display: flex;
      overflow: hidden;
      z-index: 10;
      height: 60px;
      gap: 32px;
      background: var(--background-000);

      & > * {
        user-select: none;
        -webkit-user-drag: none;
      }

      .marquee {
        display: flex;
        align-items: center;
        gap: 32px;

        p {
          color: var(--typography-400);
          white-space: nowrap;
          overflow: visible;
        }

        a {
          display: flex;
          align-items: center;
          gap: 16px;
          white-space: nowrap;
          overflow: visible;
        }

        code {
          white-space: nowrap;
          overflow: visible;
        }
      }
    }
</style>