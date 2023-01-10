# google-font-guessing-game
In this game you can test your knowledge, about one of the biggest public font libraries (https://fonts.google.com/).
You will be shown a random word, than you have to guess (or know 😉), in which font-family (from three provided-ones) the word is written in. The available fonts to guess are always the 100 most popular-fonts at that time.
You get points for each correctly guessed font-family. The game has no ending. You yourself decide for how long you want to continue to play.
This a game tests your ability to identify different fonts hosted on . 

## Setup

To run this project, install it locally using npm:

```bash
# npm
npm install
```

### .env
The [Google-Font Developer-API](https://developers.google.com/fonts/docs/developer_api) is used for this project.
To run the application you need to add your own google-API-key to the .env file. 

You can get one here: https://developers.google.com/fonts/docs/developer_api

You need to create a ```.env```-file in the projects root directory, there you need to add the following configuration: 

```
NUXT_PUBLIC_GOOGLE_API_KEY = "<Your API-key goes here>"
```

In this style you can also change all runtime-configuration-parameters of the application in ```nuxt.config.ts```. 

## Starting

You can start this application on locally on a development server (http://localhost:3000) using npm:

```bash
npm run dev
```

You can also build it for production.

```bash
# Build for production
npm run build

# Locally preview production build
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
