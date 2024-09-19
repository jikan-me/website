import {
    IconArrowsRandom,
    IconArticle,
    IconBlockquote,
    IconBook, IconBook2,
    IconBroadcast,
    IconBuilding,
    IconCalendarEvent,
    IconCarouselHorizontal,
    IconCarouselHorizontalFilled,
    IconCircleArrowUp,
    IconDeviceTv,
    IconExternalLink,
    IconEye,
    IconHierarchy,
    IconSearch, IconStack2,
    IconTag,
    IconThumbUp,
    IconUserCircle,
    IconUserPentagon,
    IconUsersGroup,
    IconUserSquare
} from "@tabler/icons-svelte";

export default {
    available: [
        {
            icon: IconDeviceTv,
            highlight: false,
            onVersion: 1,
            label: "Anime",
            description: "All available anime data"
        },
        {
            icon: IconBook,
            highlight: false,
            onVersion: 1,
            label: "Manga",
            description: "All available manga data"

        },
        {
            icon: IconUserSquare,
            highlight: false,
            onVersion: 1,
            label: "Characters",
            description: "All available character data"
        },
        {
            icon: IconUserPentagon,
            highlight: false,
            onVersion: 1,
            label: "People",
            description: "All available person data"
        },
        {
            icon: IconUserCircle,
            highlight: false,
            onVersion: 2,
            label: "Users",
            description: "Publicly available user data"
        },
        {
            icon: IconCalendarEvent,
            highlight: false,
            onVersion: 2,
            label: "Seasons",
            description: "Seasonal anime, season list, currently airing, and upcoming"

        },
        {
            icon: IconCircleArrowUp,
            highlight: false,
            onVersion: 3,
            label: "Top Ranking",
            description: "Top ranking resources"
        },
        {
            icon: IconBuilding,
            highlight: false,
            onVersion: 3,
            label: "Producers",
            description: "Producer metadata and listing"
        },
        {
            icon: IconBook2,
            highlight: false,
            onVersion: 3,
            label: "Magazines",
            description: "Magazine metadata and listing"
        },
        {
            icon: IconCarouselHorizontal,
            highlight: true,
            onVersion: 4,
            label: "Reviews",
            description: "Anime and Manga Reviews by Users"
        },
        {
            icon: IconThumbUp,
            highlight: true,
            onVersion: 4,
            label: "Recommendations",
            description: "Anime and Manga Recommendations by Users"
        },
        {
            icon: IconSearch,
            highlight: true,
            onVersion: 4,
            label: "Advanced Search",
            description: "Advanced querying and Search powered by TypeSense"
        },
        {
            icon: IconEye,
            highlight: true,
            onVersion: 4,
            label: "Watch",
            description: "Latest and most popular Anime promotional and episode releases"
        },
        {
            icon: IconUsersGroup,
            highlight: true,
            onVersion: 4,
            label: "Clubs",
            description: "Publicly available club data"
        },
        {
            icon: IconArrowsRandom,
            highlight: true,
            onVersion: 4,
            label: "Random",
            description: "Query random resources"
        },
        {
            icon: IconTag,
            highlight: true,
            onVersion: 4,
            label: "Genres",
            description: "Anime and Manga Genres Listing"
        },
    ],
    upcoming: [
        {
            icon: IconHierarchy,
            highlight: false,
            onVersion: 5,
            label: "Hiyori Integraton",
            description: "Get detailed external relational mapping of anime and manga"
        },
        {
            icon: IconStack2,
            highlight: false,
            onVersion: 5,
            label: "Interest Stacks",
            description: "Interest Stacks created by Users"
        },
        {
            icon: IconBlockquote,
            highlight: false,
            onVersion: 5,
            label: "New User About",
            description: "Support the new user about pages"
        },
        {
            icon: IconArticle,
            highlight: false,
            onVersion: 5,
            label: "Articles",
            description: "Anything and everything related to articles"
        },
        {
            icon: IconBroadcast,
            highlight: false,
            onVersion: 5,
            label: "News",
            description: "Anything and everything related to industry news"
        },
    ]
}