// Exercise
// WRITE THE FOLLOWING LOGGER EXAMPLE FROM EVENT IN A FILE
// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data));
// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');

const fs = require('fs')
const path = require('path')
const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg })
    }
}

const logger = new Logger()

let dataArr = []
logger.on('message', data => {
    console.log('Called Listener', data)
    dataArr.push(data)

});

logger.log('Hello World')
logger.log('Hi')
logger.log('Hello')

const jsonContent = JSON.stringify(dataArr)
fs.writeFile('./data/logs.json', jsonContent, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
})

