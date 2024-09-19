<script>
import Button from "./Button.svelte";
import {IconArrowDownLeft, IconBrandDiscord, IconBrandGithub, IconBrandPatreon, IconMenu, IconX} from "@tabler/icons-svelte";
import Chip from "./Chip.svelte";
import Logo from "$lib/images/jikan.svg";

let scrollY;
let mobileNavToggled = false;
$: isMinimized = scrollY > 50 ? 'navWrapper--minimize' : '';
function toggleMobileNav() {
    mobileNavToggled = !mobileNavToggled;
    document.getElementById("nav").classList.toggle('active');
}

</script>

<svelte:window bind:scrollY />

<div id="nav" class="navWrapper {isMinimized}">
    <nav class="nav">
        <div class="nav__top">
            <a href="/" class="logo"><img src={Logo} alt="Jikan API Logo"/></a>
            <div id="mobile-nav">
                <Button type="nav-trigger" size="small"
                    callback={toggleMobileNav}
                >
                    {#if mobileNavToggled}
                        <IconX size={25} stroke={1.5} />
                    {:else}
                        <IconMenu size={25} stroke={1.5} />
                    {/if}
                </Button>
            </div>
        </div>
        <div class="nav__bodyWrapper">
            <div class="nav__body">
                <div class="main">
                    <Button
                        type="nav-link"
                        urlTarget="_blank"
                        url="https://docs.api.jikan.moe/"
                    >
                        <IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
                        Documentation
                        <Chip type="outline" size="small">v4</Chip>
                    </Button>
                    <Button type="nav-link" url="/#features">Features</Button>
                    <Button type="nav-link" url="/#how-it-works">How it works</Button>
                    <Button type="nav-link" url="/#integrations">Integrations</Button>
                    <Button type="nav-link" url="/showcase">Showcase</Button>
                </div>

                <div class="links">
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="https://patreon.com/jikan"><IconBrandPatreon size={20} stroke={1.5} /></Button>
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="http://discord.jikan.moe/"><IconBrandDiscord size={20} stroke={1.5} /></Button>
                    <Button type="nav-icon-link" size="small" urlTarget="_blank" url="https://github.com/jikan-me"><IconBrandGithub size={20} stroke={1.5} /></Button>
                </div>
            </div>
        </div>
    </nav>
</div>

<style lang="scss">
    .navWrapper {
      display: flex;
      height: 100px;
      position: fixed;
      top: 0;
      z-index: 99999;
      justify-content: center;
      align-items: center;
      width: 100vw;
      backdrop-filter: blur(25px);
      transition: all 0.25s ease;


      &--minimize {
        height: 60px;
      }
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      width: var(--page-width);
      padding: 0 32px;
      gap: 32px;

      .nav__body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .main {
          display: flex;
          gap: 16px;
        }

        .links {
          display: flex;
          gap: 8px;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      nav {
        padding: 0 16px;
        display: grid;
        grid-template-columns: 100px 1fr auto;

        .main {
          gap: 8px;
        }

        .links {
          gap: 8px
        }
      }
    }


    @media screen and (max-width: 1000px) {
      #mobile-nav {
        display: block;
      }

      .navWrapper {

        nav {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;

          .nav__top {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;

            .logo {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .nav__bodyWrapper {
            //transform: translateY(-100vh);
            //filter: blur(25px);
            visibility: hidden;
            display: none;
          }
        }

        &.active {
          display: flex;
          height: 100vh;
          backdrop-filter: blur(35px);

          nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 100vw;
            padding: 0;
            gap: unset;

            .nav__bodyWrapper {
              height: 100%;
              width: 100%;
              visibility: visible;
              display: block;
            }

            .nav__top {
              padding: 32px;
              box-sizing: border-box;
            }

            .nav__body {
              height: 100%;
              width: 100%;
              flex-direction: column;
              gap: 32px;

              justify-content: center;
              align-items: center;
              transform: unset;
              filter: unset;

              .main {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            }
          }
        }

      }
    }
</style>