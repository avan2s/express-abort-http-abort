# Description
This project demonstrates how to abort an http request from the client side. The Http Request is a stream which sends large amount of data. If the client site decides how to cancel the connection (here in the example after 2 seconds), then the client will abort the request also if stream is in the line. The backend will also notice with the close event, that the client has cancelled the connection.
# How to start the example

```
npm i
npm run start
```

Then open the index.html file, browser console developer tools and click on the "FetchData" button. See the logs in the client console and on the server.