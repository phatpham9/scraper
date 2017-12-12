# scraper

[![Build Status](https://img.shields.io/travis/gorillab/scraper.svg)](https://travis-ci.org/gorillab/scraper)
[![Dependencies Status](https://img.shields.io/david/gorillab/scraper.svg)](https://github.com/gorillab/scraper)

A scraper as a service based on micro

## Features

- [micro](https://github.com/zeit/micro): micro service
- [micro-joi](https://github.com/stearm/micro-joi): query params validator
- [x-ray](https://github.com/matthewmueller/x-ray): html scraper

## Usage

### Request

Send a GET request to `/scrape` endpoint with query string that contains

- `s-url`: website url to be scraped
- `s-scope`: css selector of scope
- `s-limit`: number of data objects returned
- `[key: string]`: css selector of data in scope

### Response

An array of json data whose keys are specified in request's query string.

### Example

Scrape posts from [Hacker News](https://news.ycombinator.com)

Request:
- `s-url`: `https://news.ycombinator.com`
- `s-scope`: `#hnmain table.itemlist tr.athing`
- `s-limit`: `25`
- `title`: `td.title a`
- `description`: `td.title span a span`
- `url`: `td.title a@href`

```bash
curl http://localhost:9000/scrape?s-url=https://news.ycombinator.com&s-scope=%23hnmain table.itemlist tr.athing&title=td.title a&description=td.title span a span&url=td.title a@href
```

Response:

```javascript
[
  {
    "title": "Show HN: Airmash – Multiplayer Missile Warfare (HTML5 Game)",
    "description": "airma.sh",
    "url": "https://airma.sh/"
  },
  {
    "title": "Finding bugs in Haskell code by proving it",
    "description": "joachim-breitner.de",
    "url": "https://www.joachim-breitner.de/blog/734-Finding_bugs_in_Haskell_code_by_proving_it"
  },
  ...
]
```

## Installation

```bash
yarn
```

## Development

```bash
yarn start
```

The app will be up at `localhost:9000`

## Testing

```bash
yarn test
```

## Production

```bash
export PORT=80
yarn serve
```

The app will be up at `localhost`

## Docker

```bash
docker pull gorillab/scraper
docker run -d -p 9000:9000 gorillab/scraper
```

The app will be up at `localhost:9000`

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
