/**
 * Created by demo on 2018/6/25.
 */

var request = require('request-json');
var togo_Host = process.env.toGoHost || "http://127.0.0.1:3002";
var web_az = process.env.web_az || "AZ 1";
var instantId = process.env.instantId || "instantId";


exports.findListByRoleId = function (req, res) {
    var id = req.body.id;
    var toGoClient = request.createClient(togo_Host)
    // console.log(imgData)
    // var base64 = 'data:' + mineType.lookup(path) + ';base64,' + data;
    toGoClient.post('findListByRoleId', {id:id}, function (err, cloudres, body) {
        console.log("result:"+JSON.stringify(body))
        if(!body){
            body = {};
        }
        body["Web-Instant"] = {"instantId":instantId,"AZ":web_az};
        res.send(body)
    });
};


exports.root = function (req, res) {
        res.send({"Web-Instant":{"instantId":instantId,"AZ":web_az}})
};
