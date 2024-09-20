<script>
	import InlineBanner from "../lib/components/InlineBanner.svelte";
	import Button from "../lib/components/Button.svelte";
	import {
		IconArrowDownLeft,
		IconArrowNarrowRight,
		IconApi,
		IconExternalLink,
		IconBrandPhp,
		IconPackages,
		IconKeyOff,
		IconChartLine,
		IconBrandDiscord, IconStar, IconGitFork, IconHelp, IconCopy, IconInfoCircle, IconCode, IconPlus, IconHeartHandshake, IconCirclePlus, IconGitCommit
	} from "@tabler/icons-svelte";
	import BasicInfoDisplay from "../lib/components/DataDisplay/BasicInfoDisplay.svelte";
	import Chip from "../lib/components/Chip.svelte";
	import BasicInfoDisplayGrouped from "../lib/components/DataDisplay/BasicInfoDisplayGrouped.svelte";
	import ButtonGroup from "../lib/components/ButtonGroup.svelte";
	import Banner from "../lib/components/Banner.svelte";
	import Nav from "../lib/components/Nav.svelte";
	import Footer from "../lib/components/Footer.svelte";
	import Marquee from "../lib/components/Marquee.svelte";
	import RequestExamples from "../lib/components/RequestExamples.svelte";
	import features from "../data/features.js";
	import integrations from "../data/integrations.js";
	import ShowcaseBackground from "../lib/images/showcase-background.png";
	import Divider from "../lib/components/Divider.svelte";
	import InputReadOnly from "../lib/components/InputReadOnly.svelte";
	import IntegrationCard from "../lib/components/IntegrationCard.svelte";
	import {tooltip} from "@svelte-plugins/tooltips"
	import {onMount} from "svelte";

	let github = {};
	onMount(async() => {
		github.jikan = await ((await fetch('https://api.github.com/repos/jikan-me/jikan')).json())
		github.jikan_rest = await ((await fetch('https://api.github.com/repos/jikan-me/jikan-rest')).json())
		github.contributors = await ((await fetch('https://api.github.com/repos/jikan-me/jikan/contributors')).json())
	});

	console.log(github)

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

<section class="hero">
	<main>
		<div class="left">
			<InlineBanner
					type="patreon"
					url="https://patreon.com/jikan"
			>We rely on you! Support us on Patreon</InlineBanner>

			<div class="type--group-heading-and-content">
				<h1>Jikan API</h1>
				<p>Jikan (時間) is an unofficial & open-source API for the <strong>“most active online anime + manga community and database”</strong> — MyAnimeList.</p>
			</div>

			<BasicInfoDisplayGrouped>
				<BasicInfoDisplay
					urlTarget="_blank"
					url="https://github.com/jikan-me/jikan-rest"
					description="Visit the Jikan REST API's GitHub repository."
				>
					<IconApi size={20} stroke={1.5} />
					REST API
				</BasicInfoDisplay>
				<BasicInfoDisplay
					urlTarget="_blank"
					url="https://github.com/jikan-me/jikan"
					description="Visit the Jikan Parser API's GitHub repository."
				>
					<IconBrandPhp size={20} stroke={1.5} />
					Parser API
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="#integrations"
					urlTarget="_self"
					description="There's over 15+ available integrations made by the community."
				>
					<IconPackages size={20} stroke={1.5} />
					15+ Integrations
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="There are no tokens or auth required. Just start making requests."
				>
					<IconKeyOff size={20} stroke={1.5} />
					Auth-less
				</BasicInfoDisplay>
				<BasicInfoDisplay
					url="https://discord.jikan.moe"
					urlTarget="_blank"
					description="Click to join our discord server for help or just come say hi ✌️"
				>
					<IconBrandDiscord size={20} stroke={1.5} />
					Community Support
				</BasicInfoDisplay>
				<BasicInfoDisplay
					description="We're handling over 25~30+ million requests per week!"
				>
					<IconChartLine size={20} stroke={1.5} />
					100M+ requests / month
				</BasicInfoDisplay>
			</BasicInfoDisplayGrouped>

			<ButtonGroup>
				<Button type="primary" url="#features">Learn more</Button>

				<Button type="secondary-outline" urlTarget="_blank" url="https://docs.api.jikan.moe/">
					Get started
					<IconArrowNarrowRight size={20} stroke={1.5} />
				</Button>
			</ButtonGroup>
		</div>
		<div class="right">
			<RequestExamples />
		</div>
	</main>

	<Marquee />
</section>


<section class="featuresWrapper" id="features">
	<div class="features">
		<div class="left">
			<div class="open-source">
				<div class="type--group-heading-and-content">
					<h2>Free & Open Source</h2>
					<h3 style="display: flex">— all under <Button type="link-heading" urlTarget="_blank" url="https://choosealicense.com/licenses/mit/"><IconArrowDownLeft class="external-link" size={32} stroke={1.5} />MIT Licensing</Button></h3>
					<p>Focus on building while we keep the requests rolling. With nearly limitless quota on requests, you have the freedom to create without the need of writing/updating your own parsers or depending on limited API support. Want to launch your own private Jikan API? Go ahead.</p>
				</div>

				<Button type="primary" url="https://github.com/jikan-me" urlTarget="_blank">
					<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
					Visit GitHub organization
				</Button>
			</div>

			<div
				class="showcaseCover margin--top-64"
				style="background-image: url({ShowcaseBackground})"
			>
				<div class="overlay">
					<div class="type--group-heading-and-content">
						<h2>⚡ Powered by Jikan</h2>
						<p>Jikan was launched in late 2017 and has grown rapidly since. It is now handling over 25+ million requests weekly, <strong>free of cost</strong>.<br><br> A public showcase is available where you can view apps and projects using Jikan and even <strong>add your own</strong> there!</p>
					</div>

					<ButtonGroup>
						<Button url="/showcase" type="secondary-outline" size="full-width">
							View all apps
							<IconArrowNarrowRight size={20} stroke={1.5} />
						</Button>
						<Button url="https://github.com/jikan-me/website/edit/master/src/data/showcase.js" type="tertiary" size="full-width">
							<IconCirclePlus size={20} stroke={1.5} />
							Add my project
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h2>Features</h2>
				<p>Jikan has a significant coverage over public MyAnimeList pages with more upcoming features on the roadmap.</p>
			</div>

			<Banner type="info" size="small">
				Jikan only supports non-authenticated requests. This means, you can not authenticate a user, manage user lists, post, etc. Use the official API for those tasks.
			</Banner>

			<div>
				<h3>Available</h3>
				<BasicInfoDisplayGrouped>
					{#each features.available as feature}
						<BasicInfoDisplay
							description={feature.description}
						>
							<svelte:component this={feature.icon} size={20} stroke={1.5} />
							{#if feature.highlight}
								<Chip type="outline-gradient-light" size="small">v{feature.onVersion}</Chip>
							{:else}
								<Chip type="outline" size="small">v{feature.onVersion}</Chip>
							{/if}
							{feature.label}
						</BasicInfoDisplay>
					{/each}
				</BasicInfoDisplayGrouped>
			</div>

			<div>
				<h3>Upcoming</h3>
				<BasicInfoDisplayGrouped>
				{#each features.upcoming as feature}
					<BasicInfoDisplay
						disabled
						description={feature.description}
					>
						<svelte:component this={feature.icon} size={20} stroke={1.5} />
						<Chip type="outline" size="small">v{feature.onVersion}</Chip>
						{feature.label}
					</BasicInfoDisplay>
				{/each}
				</BasicInfoDisplayGrouped>

			</div>

			<Button urlTarget="_blank" url="https://github.com/orgs/jikan-me/projects/2" type="primary">
				<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
				View Roadmap
			</Button>
		</div>
	</div>
</section>


<section class="howItWorksWrapper" id="how-it-works">
	<div class="howItWorks">
		<div class="type--group-heading-and-content type--center">
			<h2>How does this work?</h2>
			<p>Jikan scrapes public MyAnimeList pages.<br>The service consists of two core parts.</p>
		</div>

		<div class="diagram">
			<div class="diagram__flow">
				<div class="cardDiagramInfo">
					<div class="cardDiagramInfo__meta">
						<div class="type--group-heading-and-subheading">
							<h6 class="cardDiagramInfo__title">Jikan REST API <Chip type="outline" size="xsmall">v4.1.0</Chip></h6>
							<p class="cardDiagramInfo__subtitle">— via Lumen/Laravel</p>
						</div>

						{#if github.jikan_rest}
							<div class="cardDiagramInfo__repoStats">
								<Button urlTarget="_blank" url="{github.jikan_rest.stargazers_url}" type="link">
									<IconStar size={20} stroke={1.5} />
									{github.jikan_rest.stargazers_count} stars
								</Button>
								<Button urlTarget="_blank" url="{github.jikan_rest.forks_url}" type="link">
									<IconGitFork size={20} stroke={1.5} />
									{github.jikan_rest.forks_count} forks
								</Button>
							</div>
						{/if}
					</div>

					<Divider type="line"></Divider>

					<p class="cardDiagramInfo__about">
						The REST API is responsible for using the Jikan PHP API to parse MAL It deals with handling the requests and maintaining a queryable database. Anyone can host their own instance of it.
					</p>

					<div class="cardDiagramInfo__package">
						<InputReadOnly
								id="docker"
								isCopyable
								value="docker pull jikanme/jikan-rest"
						/>

						<Button type="tertiary" size="small" url="https://hub.docker.com/r/jikanme/jikan-rest" urlTarget="_blank">
							<IconInfoCircle size={20} stroke={1.5} />
						</Button>
					</div>


					<ButtonGroup type="stacked">
						<Button urlTarget="_blank" url="https://docs.api.jikan.moe/" type="primary" size="full-width">
							<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
							View Documentation
						</Button>

						<Button type="link" size="small" url="https://jikan.docs.apiary.io/#" urlTarget="_blank">
							Looking for v3 Documentation?
							<span use:tooltip={{
								content: "Why are you still looking for this? ಠ_ಠ",
								animation: 'slide'
							}}><IconHelp size={20} stroke={1.5} /></span>
						</Button>
					</ButtonGroup>
				</div>

				<div class="connector connector--horizontal">
					<div class="connector__node"></div>
					<div class="connector__line connector__line--horizontal"></div>
					<div class="connector__node"></div>
				</div>

				<div class="cardDiagramFlow">
					<div class="cardDiagramFlow__request">
						<Chip type="request" size="small">GET</Chip>
						<code>/anime/1535</code>
					</div>
					<div class="connector connector--vertical">
						<div class="connector__node"></div>
						<div class="connector__line"></div>
						<div class="connector__node"></div>
					</div>
					<div class="cardDiagramFlow__jikan">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="40" height="40" rx="20" fill="#1847B1"/>
							<path d="M17.0148 29.75L16.2499 28.2956C16.7958 28.0873 17.3452 27.7569 17.8983 27.3044C18.4585 26.8519 18.8499 26.2163 19.0726 25.3975C19.2378 24.7798 19.3347 23.9934 19.3634 23.0381C19.3994 22.0829 19.4173 21.0235 19.4173 19.8599V10.25H22.24V19.8169C22.24 20.8583 22.2436 21.8459 22.2507 22.7796C22.2579 23.7133 22.1897 24.5644 22.046 25.3329C21.9168 26.0439 21.6654 26.6652 21.2919 27.1967C20.9256 27.7282 20.4947 28.1735 19.9991 28.5326C19.5107 28.8989 19.0043 29.1826 18.48 29.3837C17.9557 29.5848 17.4673 29.7069 17.0148 29.75Z" fill="white"/>
						</svg>
					</div>
					<div class="connector connector--vertical">
						<div class="connector__node"></div>
						<div class="connector__line"></div>
						<div class="connector__node"></div>
					</div>
					<div class="cardDiagramFlow__codeWrapper">
						<IconCode size={20} stroke={1.5} />

						<div class="cardDiagramFlow__code">
							<div class="cardDiagramInfo__codeLine">
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--dull">return</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--default">$jikan-></code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--yellow">getAnime</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--default">(</code>
							</div>
							<div class="cardDiagramFlow__codeLine cardDiagramFlow__codeLine--indent">
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--purple">new</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--yellow">AnimeRequest</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--default">(</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--value	">1535</code>
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--default">)</code>
							</div>
							<div class="cardDiagramFlow__codeLine">
								<code class="cardDiagramFlow__codeHighlight cardDiagramFlow__codeHighlight--default">);</code>
							</div>
						</div>
					</div>
					<div class="connector connector--vertical">
						<div class="connector__node"></div>
						<div class="connector__line"></div>
						<div class="connector__node"></div>
					</div>
					<div class="cardDiagramFlow__mal">
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<rect width="40" height="40" rx="20" fill="url(#pattern0_603_5000)"/>
							<defs>
								<pattern id="pattern0_603_5000" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlink:href="#image0_603_5000" transform="scale(0.00390625)"/>
								</pattern>
								<image id="image0_603_5000" width="256" height="256" xlink:href="data:image/png;base64,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"/>
							</defs>
						</svg>
					</div>
				</div>

				<div class="connector connector--horizontal">
					<div class="connector__node"></div>
					<div class="connector__line connector__line--horizontal"></div>
					<div class="connector__node"></div>
				</div>

				<div class="cardDiagramInfo">
					<div class="cardDiagramInfo__meta">
						<div class="type--group-heading-and-subheading">
							<h6 class="cardDiagramInfo__title">Jikan PHP API <Chip type="outline" size="xsmall">v4.0.9</Chip></h6>
							<p class="cardDiagramInfo__subtitle">— Parser API</p>
						</div>

						{#if github.jikan}
							<div class="cardDiagramInfo__repoStats">
								<Button urlTarget="_blank" url="{github.jikan.stargazers_url}" type="link">
									<IconStar size={20} stroke={1.5} />
									{github.jikan.stargazers_count} stars
								</Button>
								<Button urlTarget="_blank" url="{github.jikan.forks_url}" type="link">
									<IconGitFork size={20} stroke={1.5} />
									{github.jikan.forks_count} forks
								</Button>
							</div>
						{/if}
					</div>

					<Divider type="line"></Divider>

					<p class="cardDiagramInfo__about">
						The PHP API is the parser itself. It’s responsible for scraping data available on public MyAnimeList.net pages.
						<br><br>It returns the parsed data as per the request’s respective model.
					</p>

					<div class="cardDiagramInfo__package">
						<InputReadOnly
								id="composer"
								isCopyable
								value="composer install jikan-me/jikan"
						/>

						<Button type="tertiary" size="small" urlTarget="_blank" url="https://packagist.org/packages/jikan-me/jikan">
							<IconInfoCircle size={20} stroke={1.5} />
						</Button>
					</div>


					<ButtonGroup type="stacked">
						<Button urlTarget="_blank" url="https://docs.jikan.moe/" type="primary" size="full-width">
							<IconArrowDownLeft class="external-link" size={20} stroke={1.5} />
							View Documentation
						</Button>
					</ButtonGroup>
				</div>

			</div>

			<div class="diagram__contributorsWrapper">
				<div class="diagram__contributors">
					<div class="diagram__contributorsBody">
						<IconInfoCircle size={20} stroke={1.5} />
						<p>
							You can help us by contributing and reporting issues - so we can keep this API running bug-free.
						</p>
					</div>

					{#if github.contributors}
						<div class="avatars">
							{#each github.contributors.slice(0,6) as contributor}
								<a href="{contributor.html_url}" class="avatar avatar--stacked avatar--image"><img src="{contributor.avatar_url}" alt="{contributor.login}" /></a>
							{/each}
							<a class="avatar avatar--stacked avatar--more">+{github.contributors.length - 7}</a>
						</div>
					{/if}

					<div class="diagram__contributorsBorderHighlight"></div>
				</div>
			</div>
		</div>

	</div>
</section>

<section class="integrationsWrapper" id="integrations">
	<div class="integrations">
		<div class="left">
			<div class="type--group-heading-and-content">
				<h2>Seamless integration with the languages you use and love.</h2>
			</div>

			<div class="integrations__body margin--top-64">
				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconHeartHandshake size={35} stroke={1.5} />
					</div>

					<div>
						<h6>By the community, for the community</h6>
						<p>Thanks to avid contributors, there are a multitude of wrappers available so you can easily use it with the language of your choice.</p>
					</div>
				</div>

				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconGitCommit size={35} stroke={1.5} />
					</div>

					<div>
						<h6>Create or contribute to an integration</h6>
						<p>Get involved by writing or maintaining an integration in the programming language of your choice.</p>
					</div>
				</div>

				<div class="integrations__about">
					<div class="integrations__aboutIcon">
						<IconApi size={35} stroke={1.5} />
					</div>

					<div>
						<h6>OpenAPI 3.1 Specifications</h6>
						<p>Generate wrappers on the fly as our documentation is built on <Button type="link" url="#" urlTarget="blank">OpenAPI 3.1</Button> Specs.</p>
					</div>
				</div>
			</div>

			<Divider type="line"></Divider>

			<Button href="https://github.com/jikan-me/website/edit/master/src/data/integrations.js" type="secondary-outline" size="full-width">
				<IconCirclePlus size={20} stroke={1.5} />
				Add your integration here
			</Button>
		</div>

		<div class="right">
			<div class="type--group-heading-and-content">
				<h6>Available Integrations ({integrations.length})</h6>
			</div>

			<div class="integrations__listing">
				<div class="integrations__fadeout integrations__fadeout--top"></div>
				{#each integrations as integration}
					<IntegrationCard
							supportsV3={integration.supportsV3}
							supportsV4={integration.supportsV4}
							type={integration.type}
							author={integration.author}
							title={integration.title}
							language={integration.language}
							url={integration.url}
					></IntegrationCard>
				{/each}
				<div class="integrations__fadeout integrations__fadeout--bottom"></div>
			</div>
		</div>
	</div>
</section>

<Footer />