# scraper

An html scraper microservice based on x-ray & micro

[![Package Version](https://img.shields.io/github/package-json/v/phatpham9/scraper.svg)]()
[![Travis](https://img.shields.io/travis/phatpham9/scraper.svg)](https://travis-ci.org/phatpham9/scraper)
[![David](https://img.shields.io/david/phatpham9/scraper.svg)](https://github.com/phatpham9/scraper)
[![David Dev](https://img.shields.io/david/dev/phatpham9/scraper.svg)](https://github.com/phatpham9/scraper)

## Features

- [x-ray](https://github.com/matthewmueller/x-ray): An html scraper
- [micro](https://github.com/zeit/micro): Asynchronous HTTP microservices
- [joi](https://github.com/hapijs/joi): Object schema validation

## Usage

**Request**

Send a `GET` request to `/scrape` endpoint with query string if:

1. Scraping a text

| Params     | Required | Description                           |
|------------|----------|---------------------------------------|
| s-url      | yes      | destination website url to be scraped |
| s-selector | yes      | css selector of data to be extracted  |

2. Scraping multiple of data objects

| Params     | Required | Description                               |
|------------|----------|-------------------------------------------|
| s-url      | yes      | destination website url to be scraped     |
| s-scope    | yes      | css selector of data's scope              |
| s-limit    | no       | limit number of objects returned          |
| [selector] | yes      | css selector of each data to be extracted |

**Response**

A text or an array of objects in json whose keys are specified selectors in the request's query string.

## Examples

### Scraping Bitcoin price in USD from [CoinMarketCap](coinmarketcap.com)

- Request (uri encoded): `https://scraper.onroads.xyz/scrape?s-url=https://coinmarketcap.com&s-selector=%23id-bitcoin%20.price`
- Response: as shown below

<img style="text-align: center;" src="./example-images/btc-price.png" />

### Scraping top 3 coins' price

- Request (uri encoded): `https://scraper.onroads.xyz/scrape?s-url=https://coinmarketcap.com&s-scope=table%23currencies%20tbody%20tr&name=.currency-name%20.currency-name-container&price=.price&s-limit=3`
- Response: as shown below

<img style="text-align: center;" src="./example-images/top-3-price.png" />

## Development & deployment guide

### Getting started

Make sure [NodeJS](https://nodejs.org) (9.0.0 or newer), [Yarn](https://yarnpkg.com) or [NPM](https://npmjs.com) installed on your local machine. Then install project dependencies by running:

```bash
yarn
```

### Start developing

```bash
yarn start
```

The service will be up at `127.0.0.1:9000` by default

### Testing

We use ESLint to lint source code. Simply run:

```bash
yarn test
```

### Running in production mode

By the command:

```bash
PORT=80 yarn serve
```

The app will be up at `127.0.0.1`

### Deploy using Docker

You can use the existing docker image from https://hub.docker.com/r/phatpham9/scraper by running:

```bash
docker pull phatpham9/scraper
docker run -d -p 80:80 phatpham9/scraper
```

The app will be up at `127.0.0.1`

### Deploy to CaptainDuckDuck

[CaptainDuckDuck](https://github.com/githubsaturn/captainduckduck) is a nice heroku-liked tool to deploy your apps easily. You need to install CaptainDuckDuck client on your local, follow [the instruction here](https://github.com/githubsaturn/captainduckduck/wiki/Getting-Started) to do it then run on your local:

```bash
captainduckduck deploy
```

That's it!

### Deploy to Heroku

Click the below button to deploy to Heroku dyno

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Contributing

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Follow the Development guide or just simply run: `yarn start`
3. Lint code by running: yarn test
4. Create a pull request for us

## Contributing

* Phat Pham ([@phatpham9](https://github.com/phatpham9))
