'use strict';

var generator = require('node-uuid-generator');
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;
var connectionString = 'HostName=Team24-Hub2.azure-devices.net;DeviceId=Device-4;SharedAccessKey=aJ44rEpGpAH6wnImDVC+r4LQDUNpiAYYrx5DJ4lMN3Y=';
var client = clientFromConnectionString(connectionString);

function printResultFor(op, client) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
        client.close();
    };
}

var sendMessage = function() {
    var data = { ticketId : generator.generate(), entryTime : Date.now().toString(), deviceId : "Device-4" };
    var message = new Message(JSON.stringify(data));
    console.log('Sending ', message.getData());
    client.sendEvent(message, printResultFor('send', client));
}

var connectCallback = function (err) {
    if (err) {
        console.log('Could not connect: ' + err);
    } else {
        console.log('Client connected');
        setInterval(sendMessage, 1000);
    }
};

client.open(connectCallback);