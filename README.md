[![Jikan](https://i.imgur.com/GysfKrb.png)](#jikan---unofficial-myanimelistnet-php-api)

# Jikan - Unofficial MyAnimeList.net PHP API
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c10e2c0-4860-48f5-9eae-171bce417890/deploy-status)](https://app.netlify.com/sites/hardcore-archimedes-6ebd1f/deploys) [![Discord Server](https://img.shields.io/discord/460491088004907029.svg?style=flat&logo=discord)](http://discord.jikan.moe)

Jikan is an API for [MyAnimeList.net](https://myanimelist.net). You can find more details [here](https://github.com/jikan-me/jikan).

This repository represents Jikan's website - [Jikan.moe](https://jikan.moe). Please feel free to contribute and help improve it!


# Contributing
This project is built using [SvelteKit](https://kit.svelte.dev/).

Pre-reqs: Node 18+, NPM

1. Git clone & cd into project directory
2. `npm install`
3. Start the dev environment 

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## General Contributing Guidelines

When making changes, please fork the project and work on that.

### Adding an integration

1. Add a new JSON object entry in https://github.com/jikan-me/website/blob/master/src/data/integrations.js
2. Ensure that you're adding it to the end of the list
3. Validate the JSON and create a commit
4. Create a PR

#### Important notes

1. Add the language or framework you've built the project with in **all lowercase** in `language`
2. `supportsV3`, `supportsV4`; These define which version of the REST API your integration supports. V3 is a backwards notifier for some of existing wrappers.
3. `url` is the repository link of your integration


### Adding a showcase item

1. Add a new JSON object entry in https://github.com/jikan-me/website/blob/master/src/data/showcase.js
2. Ensure that you're adding it to the end of the list
3. Validate the JSON and create a commit
4. Create a PR

#### Important notes

1. Ensure that your summary is brief
2. Host your preview images on IMGUR or GitHub but please optimize the size to ensure they're not more than 300KB
3. The `imageUrl` has to be a direct link to the image (ending with the extension).
4. Ensure that the `url` you are providing is accurate and up. This can be the URl to your app's website, install/download or repository page.

### Modifying the website

We appreciate all the help in improving the experience of the site. Feel free to create a PR.

If there's something you can help with on [our roadmap](https://github.com/orgs/jikan-me/projects/5), that'd be very helpful as well.


#### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

Note: You do not have to build a production version to contribute. Comitting to the repository lets Netlify handle that and deployment for you.