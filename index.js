const express = require('express');

const app = express();
const cors = require('cors');
const { Readable } = require('stream');

app.use(cors());


app.get('/foo', (req, res) => {
    const line = 'John,Doe,20\n';
    const numLines = 5000000;
    let linesSent = 0;

    // Create a readable stream that generates lines of data on the fly
    const dataStream = new Readable({
        read() {
            if (linesSent === numLines) {
                // End the stream when all data has been sent
                this.push(null);
            } else {
                // Generate a new line of data and push it to the stream
                linesSent++;
                this.push(line);
            }
        }
    });

    res.on('close', () => {
        console.log(`client closed connection`)
    })

    // Send the response with a content type of text/plain
    res.setHeader('Content-Type', 'text/plain');

    // Pipe the data stream to the response stream
    dataStream.pipe(res);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});