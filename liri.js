 // -------------------------------  TWITTER STUFF -------------------------------------------- // 

 var myTweets = require('./keys.js');
 var Twitter = require('twitter');

 var twitterStuff = new Twitter({
     consumer_key: myTweets.consumer_key,
     consumer_secret: myTweets.consumer_secret,
     access_token_key: myTweets.access_token_key,
     access_token_secret: myTweets.access_token_secret
 });


 var params = { screen_name: 'MrGermanGuy', count: 20 };
 // According to the link in the end, all parameters (params) are optional ---> https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html

if (process.argv[2] === 'my-tweets') {
     twitterStuff.get('statuses/user_timeline', params, function(error, tweets, response)
         // info to: twitterStuff.get(path, params, callback) --> https://www.npmjs.com/package/twitter
         // info to: statuses/user_timeline --> https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline.html

         {
             console.log(error); // to log potential errors if code is not working
             if (!error) {
                 
                 for (var i = 0; i < tweets.length; i++) {
                     console.log("tweet number " + [i + 1] + " : " + tweets[i].text + " . Created: " + tweets[i].created_at);
                 }
             }
         });
 }

 if (process.argv[2] === 'tweet-something') {

     // console.log(error); // to log potential errors if code is not working
     twitterStuff.post('statuses/update', { status: "Hello, you wonderful thing" }, function(error, tweet, response) {
         console.log(error); // to log potential errors if code is not working

         if (error) throw error;
         console.log(tweet.created_at);
     });
 }

 // -------------------------------  SPOTIFY STUFF  -------------------------------------------- // 


 var Spotify = require('node-spotify-api');
 var artist = "Ace of Base";
 var track = "The Sign";
 var myQuery = artist;

 var spotify = new Spotify({
     id: 'b3e4453ac8ec49e289c327763b0a3e3b',
     secret: 'f90729f305dc4ca38b0ef6b2ea56e888'
 });


 if (process.argv[2] === 'spotify-this-song') {
     spotify.search({ type: 'track', query: 'artist:ace+of+base+track:the+sign', limit: '1' }, function(err, data) {
         console.log(err)

         // console.log(JSON.stringify(data, null, 2));

         var track = JSON.stringify(data.tracks.items[0].album.external_urls.spotify, null, 2) 

         console.log("Follow this link to your track: " +track );
     });
 }





