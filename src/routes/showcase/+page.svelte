<script>
import Nav from "../../lib/components/Nav.svelte";
import Footer from "../../lib/components/Footer.svelte";
import entries from "../../data/showcase.js";
import ShowcaseCard from "../../lib/components/ShowcaseCard.svelte";
import Button from "../../lib/components/Button.svelte";
import Divider from "../../lib/components/Divider.svelte";
import {IconCirclePlus} from "@tabler/icons-svelte";
</script>

<svelte:head>
    <title>Jikan - Unofficial MyAnimeList API</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jikan - Unofficial MyAnimeList API</title>

    <!-- SEO/OGP -->
    <meta name="author" content="@irfanDahir">
    <meta name="keywords" content="jikan, anime, rest, php, api, myanimelist, free, open, source, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, manga, people, characters, novels, manhua, manhwa, wrapper, ruby, python, restful, dart, node, javascript, js, nodejs, java, net">
    <meta name="description" content="Jikan is an unofficial MyAnimeList REST based API">
    <meta name="image" content="https://i.imgur.com/eUveNoj.png">
    <meta itemprop="name" content="Jikan - Unofficial MyAnimeList API">
    <meta itemprop="description" content="Jikan is an unofficial MyAnimeList REST based API">
    <meta itemprop="image" content="https://i.imgur.com/eUveNoj.png">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Jikan - Unofficial MyAnimeList API">
    <meta name="twitter:description" content="Jikan is an unofficial MyAnimeList REST based API">
    <meta name="twitter:creator" content="@irfanDahir">
    <meta name="twitter:site" content="@irfanDahir">
    <meta name="twitter:image:src" content="https://i.imgur.com/eUveNoj.png">
    <meta name="twitter:image:alt" content="Jikan.moe brand image">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="og:title" content="Jikan - Unofficial MyAnimeList API">
    <meta name="og:description" content="Jikan is an unofficial MyAnimeList REST based API">
    <meta name="og:image" content="https://i.imgur.com/eUveNoj.png">
    <meta name="og:url" content="https://jikan.moe">
    <meta name="og:site_name" content="Jikan - Unofficial MyAnimeList API">
    <meta name="og:locale" content="en_US">
    <meta name="og:type" content="website">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=2">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=2">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=2">
    <link rel="manifest" href="/favicon/site.webmanifest?v=2">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=2" color="#5bbad5">
    <link rel="shortcut icon" href="/favicon/favicon.ico?v=2">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</svelte:head>

<Nav />

<section class="showcaseWrapper">
    <div class="showcase">
        {#each entries.reverse() as entry}
            <ShowcaseCard
                title={entry.title}
                url={entry.url}
                imageUrl={entry.imageUrl}
                summary={entry.summary}
            />
        {/each}
    </div>
</section>

<Footer />