module.exports={
  "title": "Pixelorama Documentation",
  "tagline": "Documentation for Pixelorama, your free & open source sprite editor.",
  "url": "https://Orama-Interactive.github.io/",
  "baseUrl": "/Pixelorama-Docs/",
  "organizationName": "Orama-Interactive",
  "projectName": "Pixelorama-Docs",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [],
    "repoUrl": "https://github.com/Orama-Interactive/Pixelorama"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/",
          "path": "./docs",
          "sidebarPath": "./sidebars.js",
		  "routeBasePath": "/"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
	"algolia": {
      "appId": 'Q1VSXGNOJI',
      "apiKey": '9702a7187ea2079fe9def3138dd61b8b',
      "indexName": 'pixelorama',

      // Optional: see doc section bellow
      "contextualSearch": false,

      // Optional: Algolia search parameters
      "searchParameters": {},

      //... other Algolia params
    },
    "docs": {
      "sidebar": {
        "hideable": true,
      },
    },
    "navbar": {
      "title": "Pixelorama Documentation",
      "logo": {
        "src": "./img/favicon.ico"
      },
      "items": [
        {
          "to": "/",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/Orama-Interactive/Pixelorama-Docs",
          "label": "GitHub",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Steam",
              "to": "https://store.steampowered.com/app/2779170/Pixelorama/"
            },
            {
              "label": "Patreon",
              "to": "https://www.patreon.com/c/OramaInteractive/"
            },
            {
              "label": "Itch.io",
              "to": "https://orama-interactive.itch.io/pixelorama"
            },
            {
              "label": "Discord",
              "to": "https://discord.gg/GTMtr8s"
            },
          ]
        },
        {
          "title": "Social media",
          "items": [
            {
              "label": "Mastodon",
              "to": "https://mastodon.art/@Pixelorama"
            },
            {
              "label": "Bluesky",
              "to": "https://bsky.app/profile/pixelorama.bsky.social"
            },
            {
              "label": "YouTube",
              "to": "https://www.youtube.com/@OramaInteractive"
            },
          ]
        },
      ],
      "copyright": "Copyright © 2020-present Orama Interactive",
      "logo": {
        "src": "./img/oss_logo.png"
      }
    }
  }
}
