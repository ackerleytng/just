# just. anywhere?

Little webpage that will randomly suggest places I could go for food.

This is totally biased towards my own preferences.

If you like it, you could replicate this for yourself using a free account at [restdb.io](https://restdb.io/), which is a really nice service for hobby projects like this.

## restdb.io schema

4 columns, all of which are text, with the column headers

+ `place`
+ `branch`
+ `address`
+ `hours`

restdb.io provides a simple interface where you could limit api queries to just reads, for example, by creating [api keys for CORS ajax calls](https://restdb.io/docs/apikeys-and-cors).
