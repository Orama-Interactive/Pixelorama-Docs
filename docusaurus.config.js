module.exports={
  "title": "Pixelorama",
  "tagline": "Pixelorama, your free & open source sprite editor.",
  "url": "https://Orama-Interactive.github.io/",
  "baseUrl": "/",
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
          "customCss": "src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [require.resolve('docusaurus-lunr-search')],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
      },
    },
    "navbar": {
      "title": "Pixelorama",
      "logo": {
        "src": "./img/favicon.ico"
      },
      "items": [
        {
          "to": "/Introduction",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/Orama-Interactive/Pixelorama-Docs",
          "label": "GitHub",
          "position": "left"
        },
        {
          "href": "https://www.patreon.com/c/OramaInteractive/s",
          "label": "Support Us ❤️",
          "position": "right"
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
        "src": "./img/orama_logo.svg"
      }
    }
  }
}
