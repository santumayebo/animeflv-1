define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\c\\Desktop\\animeflv\\docs\\main.js",
    "groupTitle": "C:\\Users\\c\\Desktop\\animeflv\\docs\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/DownloadLinksByEpsId/:id",
    "title": "Get Download URls list of the anime chapter.",
    "version": "1.0.5",
    "name": "GetDownloadLinksByEpsId",
    "group": "DownloadLinksByEpsId",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Download URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"downloads\": [\n   {\n     \"server\": \"MEGA\",\n     \"url\": \"https://mega.nz/#!55InSaxI!5JTxVNA29LCFNr7c1Fxg0PUBQPVQyXBo4aVF3e06jN0\"\n   },\n   {\n     \"server\": \"Zippyshare\",\n     \"url\": \"https://www61.zippyshare.com/d/4KKPr5XK/38775/1415_12.mp4\"\n   },\n   {\n     \"server\": \"Openload\",\n     \"url\": \"https://openload.co/f/sPXbBXnFikU/\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Episode id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "You will find the `id` of each chapter in the `episodes` property",
          "content": "{\n  \"episodes\": [\n     {\n       \"nextEpisodeDate\": null\n     },\n     {\n       \"episode\": 12,\n       \"id\": \"28800/tokyo-ghoul-12\",\n       \"imagePreview\": \"https://cdn.animeflv.net/screenshots/1415/12/th_3.jpg\"\n     },\n      //......\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/routes/index.js",
    "groupTitle": "DownloadLinksByEpsId"
  },
  {
    "type": "get",
    "url": "/GetAnimeServers/:id",
    "title": "Get list of all servers available for the anime episode.",
    "version": "1.0.5",
    "name": "GetAnimeServers",
    "group": "GetAnimeServers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>List of servers available for the episode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.server",
            "description": "<p>Server name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.url",
            "description": "<p>Video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.title",
            "description": "<p>Server temp name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "servers.allow_mobile",
            "description": "<p>N/A</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.code",
            "description": "<p>Video URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"servers\": [\n     {\n       \"server\": \"amus\",\n       \"title\": \"Izanagi\",\n       \"allow_mobile\": true,\n       \"code\": \"https://s1.animeflv.net/embed.php?s=izanagi&v=RXJZUU5VSmRZRWZBSjhqazZiUUh6ZVhXY0JoUWxTU1FzTTBZVEh4OGNoT3FXNVF3amVPZGJxdWllRXhDYmNUaytjenlOdG9wVnlGdWdhUm1zSlovZlFWZy94SnFCK3RhWUxlYVAyY3FiRm56dkl4SXR1VzBVOVZGTDloRlJWZ3NZSVR3TW5peGhTMFN4cTkwc09tOWtBPT0=\"\n     },\n     {\n       \"server\": \"fembed\",\n       \"title\": \"Fembed\",\n       \"allow_mobile\": true,\n       \"code\": \"https://embedsito.com/v/8xopp837qo7\"\n     },\n     {\n       \"server\": \"mega\",\n       \"title\": \"MEGA\",\n       \"url\": \"https://mega.nz/#!55InSaxI!5JTxVNA29LCFNr7c1Fxg0PUBQPVQyXBo4aVF3e06jN0\",\n       \"allow_mobile\": true,\n       \"code\": \"https://mega.nz/embed#!55InSaxI!5JTxVNA29LCFNr7c1Fxg0PUBQPVQyXBo4aVF3e06jN0\"\n     },\n     {\n       \"server\": \"yu\",\n       \"title\": \"YourUpload\",\n       \"allow_mobile\": true,\n       \"code\": \"https://www.yourupload.com/embed/21KnA1854827\"\n     },\n     {\n       \"server\": \"netu\",\n       \"title\": \"Netu\",\n       \"allow_mobile\": true,\n       \"code\": \"https://hqq.tv/player/embed_player.php?vid=8B98HMBDSA95\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Episode id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "You will find the `id` of each chapter in the `episodes` property",
          "content": "{\n  \"episodes\": [\n     {\n       \"nextEpisodeDate\": null\n     },\n     {\n       \"episode\": 12,\n       \"id\": \"28800/tokyo-ghoul-12\",\n       \"imagePreview\": \"https://cdn.animeflv.net/screenshots/1415/12/th_3.jpg\"\n     },\n      //......\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/routes/index.js",
    "groupTitle": "GetAnimeServers"
  },
  {
    "type": "get",
    "url": "/LatestAnimeAdded",
    "title": "Get list of recently added anime",
    "version": "1.0.5",
    "name": "GetLatestAnimeAdded",
    "group": "LastedAnimeAdded",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Anime id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Anime title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poster",
            "description": "<p>Poster (img) on base64</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>Background image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "synopsis",
            "description": "<p>Summary information about the story</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "debut",
            "description": "<p>Current status of the anime</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rating",
            "description": "<p>Overall rating</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "genres",
            "description": "<p>Genres to which he belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "episodes",
            "description": "<p>List of current episodes</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "episodes.nextEpisodeDate",
            "description": "<p>Date of the next TV broadcast</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "episodes.episode",
            "description": "<p>Episode number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "episodes.id",
            "description": "<p>Episode id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "episodes.imagePreview",
            "description": "<p>EpisodeDate image preview</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"animes\": [\n     {\n       \"id\": \"anime/5715/pokemon-pelicula-22-mewtwo-no-gyakushuu-evolution\",\n       \"title\": \"Pokemon Película 22: Mewtwo no Gyakushuu Evolution\",\n       \"poster\": \"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\",\n       \"banner\": \"https://animeflv.net/uploads/animes/banners/3276.jpg\",\n       \"synopsis\": \"Película 3.6Uno de los Pokémon más poderosos del mundo quiere venganza.\",\n       \"debut\": \"Finalizado\",\n       \"type\": \"Película\",\n       \"rating\": \"3.6\",\n       \"genres\": [\n         \"accion\",\n         \"aventura\",\n         \"comedia\",\n         \"fantasia\",\n         \"infantil\"\n       ],\n       \"episodes\": [\n         {\n           \"nextEpisodeDate\": null\n         },\n         {\n           \"episode\": 1,\n           \"id\": \"54021/pokemon-pelicula-22-mewtwo-no-gyakushuu-evolution-1\",\n           \"imagePreview\": \"https://cdn.animeflv.net/screenshots/3276/1/th_3.jpg\"\n         }\n       ]\n     },\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/routes/index.js",
    "groupTitle": "LastedAnimeAdded"
  },
  {
    "type": "get",
    "url": "/LatestEpisodesAdded",
    "title": "Get list of all recently added chapters",
    "version": "1.0.5",
    "name": "GetLatestEpisodesAdded",
    "group": "LatestEpisodesAdded",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Episode id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Anime title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "poster",
            "description": "<p>Poster (img) on base64</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "episode",
            "description": "<p>Episode number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "servers",
            "description": "<p>List of servers available for the episode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.server",
            "description": "<p>Server name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.url",
            "description": "<p>Video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.title",
            "description": "<p>Server temp name</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "servers.allow_mobile",
            "description": "<p>N/A</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "servers.code",
            "description": "<p>Video URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n\"episodes\": [\n  {\n    \"id\": \"54027/haikyuu-to-the-top-8\",\n    \"title\": \"Haikyuu!!: To the Top\",\n    \"poster\": \"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\",\n    \"episode\": 8,\n    \"servers\": [\n      {\n        \"server\": \"natsuki\",\n        \"title\": \"Natsuki\",\n        \"allow_mobile\": true,\n        \"code\": \"https://s1.animeflv.net/embed.php?s=natsuki&v=THVKOEo0SElCSlFWWDZKMkQzUzYxV2V6blBFK2pFMEZmMkVPWEt3WERDVkRvbEl5MTRDVVFNNFlKT200YS9DRUJvT0RoMkZBUHJJcm9HKzBTa0xlUFFEOVBYbGdPcjl3VFhjc1dUVkF1UmJvbUN4SWFXZTQ1QUI1NjdYb0hmSTM0ckN5d29JeUZsR2s3TEp0ZkxjWTl3PT0=\"\n      },\n      {\n        \"server\": \"fembed\",\n        \"title\": \"Fembed\",\n        \"allow_mobile\": true,\n        \"code\": \"https://embedsito.com/v/7rl7dfgx5lmzk8m\"\n      },\n      {\n        \"server\": \"mega\",\n        \"title\": \"MEGA\",\n        \"url\": \"https://mega.nz/#!rfxzgI4R!0vIb1XjaAsSSzZe2cvr4ycjsdmRXqyZWldWqm5Ia-1U\",\n        \"allow_mobile\": true,\n        \"code\": \"https://mega.nz/embed#!rfxzgI4R!0vIb1XjaAsSSzZe2cvr4ycjsdmRXqyZWldWqm5Ia-1U\"\n      },\n      {\n        \"server\": \"okru\",\n        \"title\": \"Okru\",\n        \"allow_mobile\": true,\n        \"code\": \"https://ok.ru/videoembed/1625140431472\"\n      },\n      {\n        \"server\": \"yu\",\n        \"title\": \"YourUpload\",\n        \"allow_mobile\": true,\n        \"code\": \"https://www.yourupload.com/embed/SYDvT1FvNCDu\"\n      },\n      {\n        \"server\": \"maru\",\n        \"title\": \"Maru\",\n        \"allow_mobile\": true,\n        \"code\": \"https://my.mail.ru/video/embed/8995617145282895595#budyak.rus#7915\"\n      },\n      {\n        \"server\": \"netu\",\n        \"title\": \"Netu\",\n        \"allow_mobile\": true,\n        \"code\": \"https://hqq.tv/player/embed_player.php?vid=bDFrdWQ3RURGMFhrdmthcXlrT2I0dz09\"\n      }\n    ]\n  },",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/routes/index.js",
    "groupTitle": "LatestEpisodesAdded"
  }
] });