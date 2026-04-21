const webTools = require('node:http');


const myAddress = '127.0.0.1';
const myDoor = 8080;

const myEngine = webTools.createServer((incomingTraffic, outgoingData) => {
    outgoingData.statusCode = 200;
    outgoingData.setHeader('Content-Type', 'text/plain');
    outgoingData.end('Welcome to the Champaran Prime API!\n');
});


myEngine.listen(myDoor, myAddress, () => {
    console.log(`Engine fired up and listening at http://${myAddress}:${myDoor}/`);
});