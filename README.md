# NBA Eval

### Instructions
Step 1. Bootstrap a new [NextJS](https://nextjs.org/) site by using `create-next-app`

Step 2. We have provided you with a players.json file contains a list of players: `./data/players.json`. Create an API endpoint `/api/players` that returns that players data locally. (https://nextjs.org/docs/api-routes/introduction)

Step 3. We have provided you with a teams.json file contains a list of teams: `./data/teams.json`. Create an API endpoint `/api/teams` that returns that teams data locally.g

Step 4. Update `./pages/index.js` to fetch the players and teams API **this should be done client-side**. Create a "Loading" component that is visible until both endpoints have been fetched.

Step 5. Create a `PlayerCard` component that matches the design of `./docs/player-card.png`. For each player in the `players` API response, render an instance of this component. (Roboto is the font being used)

Step 6. Use Flex box to render the player cards in a grid. Create a media query that allows you to set the amount of grid columns. 

BONUS: For this step please do all data fetching **server-side**. Create another page route `/teams`. Fetch the data to load all the nba teams in list form


| screens size | columns |

| ------------ | ------- |

| `< 640px` | 1 |

| `>= 640px` | 2 |

| `>= 960px3` | 3 |

  

### Player JSON Schema

| Field | Description |

| -------- | ------------------------- |

| pid | Player ID |

| tid | Team ID |

| ln | Last Name |

| fn | First Name |

| num | Jersey Number |

| pos | Position |

| pts | Points Per Game |

| reb | Rebounds Per Game |

| ast | Assists Per Game |

| stl | Steals Per Game |

| headshot | Player Headshot Image URL |  
  
  

### Team JSON Schema

| Field | Description |

| ----- | ------------------ |

| tid | Team ID |

| city | Team City |

| name | Team Name |

| color | Primary Team Color |

| logo | Team Logo Image URL|

  
### Testing
Run the development server:

```bash

npm run dev

# or

yarn dev

```

  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
