{
    // Configuration Version
    version: 5,

    /**
     * Show Related Information
     */
    show: {
        title: "Channel Clayton—Mithören",
        subtitle: "Wissenschaftliche Abschlussarbeiten des Instituts für Kunstwissenschaften, Kunstpädagogik und Kunstvermittlung",
        summary: "Channel Clayton ist auf dem Angewandte Festival 2020 als Podcast vertreten",
        poster: "/podcast/img/logo-itunes.jpg",
        link: "https://channel-clayton.uni-ak.ac.at/"
    },

    /**
     * Episode related Information
     */
    title: "Episode 01a - View-Adina Bar-On - Clelia Baumgartner",
    subtitle: "Ein Einführungskurs für Informatiker vermittelt unterschiedliche Denkweisen die gesellschaftliche Bedeutung des Fachs zu vermitteln",
    // ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601
    publicationDate: "2020-06-10T11:00:44+01:00",
    poster: "/podcast/img/logo-itunes.jpg",
    // ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of add ing milliseconds, see https://en.wikipedia.org/wiki/ISO_8601
    duration: "00:11:26",
    link: "https://channel-clayton.uni-ak.ac.at/index.php/clelia-baumgartner/",


    /**
     * Audio Assets
     * - media Assets played by the audio player
     * - format support depends on the used browser (https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats)
     * - also supports HLS streams
     *
     * Asset
     * - url: absolute path to media asset
     * - size: file size in  byte
     * - (title): title to be displayed in download tab
     * - mimeType: media asset mimeType
     */
    audio: [{
            url: "/podcast/episodes/episode01.m4a",
            size: "71862603",
            title: "MPEG-4 AAC Audio (m4a)",
            mimeType: "audio/mp4"
        },
        {
            url: "/podcast/episodes/episode01.ogg",
            size: "97786195",
            title: "Ogg Vorbis Audio (oga)",
            mimeType: "audio/ogg"
        },
        {
            url: "/podcast/episodes/episode01.mp3",
            size: "95522160",
            title: "MP3 Audio (mp3)",
            mimeType: "audio/mpeg"
        }
    ],

    /**
     * Files
     * - list of files available for download
     * - if no files are present, audio assets will be used as downloads
     *
     * Asset
     * - url: absolute path to media asset
     * - size: file size in  byte
     * - title: title to be displayed in download tab
     * - (mimeType): media asset mimeType
     */
    // files: [{
    //         url: "https://forschergeist.de/podlove/file/2017/s/webplayer/c/episode/fg072-verantwortung-in-der-informatik.m4a",
    //         size: "71862603",
    //         title: "Episode",
    //         mimeType: "audio/mp4"
    //     },
    //     {
    //         url: "https://forschergeist.de/podlove/file/2021/s/website/c/page-footer/fg072-verantwortung-in-der-informatik.pdf",
    //         size: "284672",
    //         title: "Prospekt",
    //         mimeType: "application/pdf"
    //     },
    //     {
    //         url: "https://forschergeist.de/podlove/file/2048/s/website/c/page-footer/fg072-verantwortung-in-der-informatik.txt",
    //         size: "132090",
    //         title: "Transkripte",
    //         mimeType: "text/plain"
    //     }
    // ],

    /**
     * Chapters:
     * - can be a plain list or a reference to a json file
     * - if present chapters tab will be available
     */
    // chapters: chapters,

    /**
     * Contributors
     * - used by info and transcripts tab
     *
     * Contributor
     * - id: used as a reference in transcripts
     * - name: name of the contributor
     * - (avatar): avatar of the contributor
     * - (group): contributors group
     */
    // contributors: [{
    //         id: "1",
    //         name: "Tim Pritlove",
    //         avatar: "/assets/tim-pritlove_150x150.jpg",
    //         group: {
    //             id: "1",
    //             slug: "onair",
    //             title: "On Air"
    //         }
    //     },
    //     {
    //         id: "77",
    //         name: "Peter Purgathofer",
    //         avatar: "/assets/peter-purgathofer_128x128.jpg",
    //         group: {
    //             id: "1",
    //             slug: "onair",
    //             title: "On Air"
    //         }
    //     }
    // ],

    /**
     * Transcripts:
     * - can be a plain list or a reference to a json file
     * - if present transcripts tab will be available
     */
    // transcripts: transcripts
}
