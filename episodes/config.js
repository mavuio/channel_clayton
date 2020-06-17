{
    version: 5,

    // player asset base path, falls back to ./
    base: "/podcast/player/",

    activeTab: "share", // default active tab, can be set to [chapters, files, share, playlist]

    theme: {
        /**
         * Tokens
         * - if defined the player defaults are dropped
         * - rgba as well as hex values are allowed
         * - use this generator to get a direct visual feedback:
         */
        // tokens: {
        //     brand: "#166255",
        //     brandDark: "#166255",
        //     brandDarkest: "#1A3A4A",
        //     brandLightest: "#E5EAECFF",
        //     shadeDark: "#807E7C",
        //     shadeBase: "#807E7C",
        //     contrast: "#000",
        //     alt: "#fff"
        // },

        /**
         * Fonts
         * - by default the system font stack is used (https://css-tricks.com/snippets/css/system-font-stack/)
         *
         * font:
         * - name: font name that is used in the font stack
         * - family: list of fonts in a fallback order
         * - weight: font weight of the defined font
         * - src: list of web font sources (allowed: woff, woff2, ttf, eot, svg)
         */
        // fonts: {
        //     ci: {
        //         name: "RobotoBlack",
        //         family: [
        //             "RobotoBlack",
        //             "Calibri",
        //             "Candara",
        //             "Arial",
        //             "Helvetica",
        //             "sans-serif"
        //         ],
        //         weight: 900,
        //         src: ["./assets/Roboto-Black.ttf"]
        //     },
        //     regular: {
        //         name: "FiraSansLight",
        //         family: [
        //             "FiraSansLight",
        //             "Calibri",
        //             "Candara",
        //             "Arial",
        //             "Helvetica",
        //             "sans-serif"
        //         ],
        //         weight: 300,
        //         src: ["./assets/FiraSans-Light.ttf"]
        //     },
        //     bold: {
        //         name: "FiraSansBold",
        //         family: [
        //             "FiraSansBold",
        //             "Calibri",
        //             "Candara",
        //             "Arial",
        //             "Helvetica",
        //             "sans-serif"
        //         ],
        //         weight: 700,
        //         src: ["./assets/FiraSans-Bold.ttf"]
        //     }
        // }
    },

    /**
     * Subscribe Button
     * - configuration for the subsscribe button overlay
     * - if not defined the subscribe button won't be rendered
     */
    "subscribe-button": {
        feed: "https://channel-clayton.uni-ak.ac.at/podcast/episodes.m4a.rss", // Rss feed

        /**
         * Clients
         * - list of supported podcast clients on android, iOS, Windows, OSX
         * - only available clients on the used os/platform are shown
         * - order in list determines rendered order
         */
        clients: [{
                id: "apple-podcasts",
                service: "id934797989" // https://podcasts.apple.com/podcast/[service]
            },
            {
                id: "antenna-pod"
            },
            {
                id: "beyond-pod"
            },
            {
                id: "castbox",
                service: "castbox-id"
            },
            {
                id: "castro"
            },
            {
                id: "clementine"
            },
            // {
            //   id: "deezer",
            //   service: "" https://www.deezer.com/en/show/[service]
            // },
            {
                id: "downcast"
            },
            {
                id: "google-podcasts",
                service: "https://forschergeist.de/feed/m4a/" // feed
            },
            {
                id: "gpodder"
            },
            {
                id: "itunes"
            },
            {
                id: "i-catcher"
            },
            {
                id: "instacast"
            },
            {
                id: "overcast"
            },
            {
                id: "player-fm"
            },
            {
                id: "pocket-casts"
            },
            {
                id: "pocket-casts",
                service: "https://forschergeist.de/feed/m4a/" // feed
            },
            {
                id: "pod-grasp"
            },
            {
                id: "podcast-addict"
            },
            {
                id: "podcast-republic"
            },
            {
                id: "podcat"
            },
            {
                id: "podscout"
            },
            {
                id: "rss-radio"
            },
            // {
            //   id: "soundcloud",
            //   service: "", // https://soundcloud.com/[service]
            // },
            // {
            //   id: "spotify",
            //   service: "", // https://open.spotify.com/show/[service]
            // },
            // {
            //   id: "stitcher",
            //   service: "" // https://www.stitcher.com/podcast/[service]
            // },
            // {
            //   id: "youtube",
            //   service: "" // https://www.youtube.com/channel/[service]
            // },
            {
                id: "rss"
            }
        ]
    },

    /**
     * Playlist:
     * - can be a plain list or a reference to a json file
     * - if present playlist tab will be available
     */
    // playlist: playlist,

    /*
      Share Tab
    */
    share: {
        /**
         * Share Channels:
         * - list of available channels in share tab
         */
        channels: [
            // "facebook",
            "twitter",
            // "whats-app",
            // "linkedin",
            // "pinterest",
            // "xing",
            "mail",
            "link"
        ],
        // share outlet, if not provided embed snippet is not available
        // outlet: "/share.html",
        sharePlaytime: true
    }
}
