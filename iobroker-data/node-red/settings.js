/**
 * Copyright 2013 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// The `https` setting requires the `fs` module. Uncomment the following
// to make it available:
//var fs = require("fs");

module.exports = {
    // the tcp port that the Node-RED web server is listening on
    uiPort: 8089,

    // By default, the Node-RED UI accepts connections on all IPv4 interfaces.
    // The following property can be used to listen on a specific interface. For
    // example, the following would only allow connections from the local machine.
    //uiHost: "127.0.0.1",
    iobrokerInstance: 0,
    iobrokerConfig: {"system":{"memoryLimitMB":0,"hostname":"","statisticsInterval":15000,"statisticsIntervalComment":"Interval how often the counters for input/output in adapters and controller will be updated"},"multihostService":{"enabled":false,"secure":true},"network":{"IPv4":true,"IPv6":true,"bindAddress":null},"objects":{"type":"file","typeComment":"Possible values: 'file' - [port 9001], redis - [port 6379], couch - [port 5984].","host":"127.0.0.1","port":9001,"user":"","pass":"","noFileCache":false,"connectTimeout":2000,"backup":{"disabled":false,"files":24,"filesComment":"Minimal number of backup files, after the deletion will be executed according to backupTime settings","hours":48,"hoursComment":"All backups older than 48 hours will be deleted. But only if the number of files is greater than of backupNumber","period":120,"periodComment":"by default backup every 2 hours. Time is in minutes. To disable backup set the value to 0","path":"","pathComment":"Absolute path to backup directory or empty to backup in data directory"}},"states":{"type":"file","typeComment":"Possible values: 'file' - [port 9000], 'redis' - [port 6379].","host":"127.0.0.1","port":9000,"maxQueue":1000,"options":{"auth_pass":null,"retry_max_delay":15000},"backup":{"disabled":false,"files":24,"filesComment":"Minimal number of backup files, after the deletion will be executed according to backupTime settings","hours":48,"hoursComment":"All backups older than 48 hours will be deleted. But only if the number of files is greater than of backupNumber","period":120,"periodComment":"by default backup every 2 hours. Time is in minutes. To disable backup set the value to 0","path":"","pathComment":"Absolute path to backup directory or empty to backup in data directory"}},"log":{"level":"info","maxDays":7,"noStdout":true,"transport":{"file1":{"type":"file","enabled":true,"filename":"/opt/iobroker/log/iobroker","fileext":".log","maxsize":null,"maxFiles":null,"systemLog":true,"handleExceptions":false,"name":"iobroker","label":"","level":"info","json":false,"silent":false,"colorize":true,"localTime":true,"datePattern":".yyyy-MM-dd.log"},"syslog1":{"type":"syslog","enabled":false,"host":"localhost","host_comment":"The host running syslogd, defaults to localhost.","port_comment":"The port on the host that syslog is running on, defaults to syslogd's default port(514/UDP).","protocol":"udp4","protocol_comment":"The network protocol to log over (e.g. tcp4, udp4, unix, unix-connect, etc).","path_comment":"The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).","facility_comment":"Syslog facility to use (Default: local0).","localhost":"iobroker","localhost_comment":"Host to indicate that log messages are coming from (Default: localhost).","sysLogType_comment":"The type of the syslog protocol to use (Default: BSD).","app_name_comment":"The name of the application (Default: process.title).","eol_comment":"The end of line character to be added to the end of the message (Default: Message without modifications)."}}},"dataDirComment":"Always relative to iobroker.js-controller/","dataDir":"../../iobroker-data/","instance":0},

    // Retry time in milliseconds for MQTT connections
    mqttReconnectTime: 15000,

    // Retry time in milliseconds for Serial port connections
    serialReconnectTime: 15000,

    // Retry time in milliseconds for TCP socket connections
    //socketReconnectTime: 10000,

    // Timeout in milliseconds for TCP server socket connections
    //  defaults to no timeout
    //socketTimeout: 120000,

    // Maximum number of lines in debug window before pruning
    debugMaxLength: 1000,

    // The file containing the flows. If not set, it defaults to flows_<hostname>.json
    flowFile: 'flows.json',

    // To enabled pretty-printing of the flow within the flow file, set the following
    //  property to true:
    flowFilePretty: true,
    
    // By default, all user data is stored in the Node-RED install directory. To
    // use a different location, the following property can be used
    userDir: __dirname + '/',

    // Node-RED scans the `nodes` directory in the install directory to find nodes.
    // The following property can be used to specify an additional directory to scan.
    nodesDir: "/opt/iobroker/node_modules/iobroker.node-red/nodes/",

    // By default, the Node-RED UI is available at http://localhost:1880/
    // The following property can be used to specify a different root path.
    // If set to false, this is disabled.
    //httpAdminRoot: '/admin',

    // You can protect the user interface with a userid and password by using the following property.
    // The password must be an md5 hash  eg.. 5f4dcc3b5aa765d61d8327deb882cf99 ('password')
    //httpAdminAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},

    // Some nodes, such as HTTP In, can be used to listen for incoming http requests.
    // By default, these are served relative to '/'. The following property
    // can be used to specifiy a different root path. If set to false, this is
    // disabled.
    //httpNodeRoot: '/nodes',
    
    // To password protect the node-defined HTTP endpoints, the following property
    // can be used.
    // The password must be an md5 hash  eg.. 5f4dcc3b5aa765d61d8327deb882cf99 ('password')
    //httpNodeAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},
    
    // When httpAdminRoot is used to move the UI to a different root path, the
    // following property can be used to identify a directory of static content
    // that should be served at http://localhost:1880/.
    //httpStatic: '/home/nol/node-red-dashboard/',

    // To password protect the static content, the following property can be used.
    // The password must be an md5 hash  eg.. 5f4dcc3b5aa765d61d8327deb882cf99 ('password')
    //httpStaticAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},
    
    // The following property can be used in place of 'httpAdminRoot' and 'httpNodeRoot',
    // to apply the same root to both parts.
    httpRoot: "/",
    
    // The following property can be used in place of 'httpAdminAuth' and 'httpNodeAuth',
    // to apply the same authentication to both parts.
    //httpAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},
    
    // The following property can be used to disable the editor. The admin API
    // is not affected by this option. To disable both the editor and the admin
    // API, use either the httpRoot or httpAdminRoot properties
    //disableEditor: false,
    
    // The following property can be used to enable HTTPS
    // See http://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
    // for details on its contents.
    // See the comment at the top of this file on how to load the `fs` module used by
    // this setting.
    // 
    //https: {
    //    key: fs.readFileSync('privatekey.pem'),
    //    cert: fs.readFileSync('certificate.pem')
    //},

    // The following property can be used to configure cross-origin resource sharing
    // in the HTTP nodes.
    // See https://github.com/troygoode/node-cors#configuration-options for
    // details on its contents. The following is a basic permissive set of options:
    //httpNodeCors: {
    //    origin: "*",
    //    methods: "GET,PUT,POST,DELETE"
    //},
    
    // Anything in this hash is globally available to all functions.
    // It is accessed as context.global.
    // eg:
    //    functionGlobalContext: { os:require('os') }
    // can be accessed in a function block as:
    //    context.global.os

    valueConvert: true,
	
    functionGlobalContext: {
        //

        // os:require('os'),
        // bonescript:require('bonescript'),
        // arduino:require('duino')
    }

};
