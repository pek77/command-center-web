/**
 * Created by demo on 2018/6/25.
 */

var request = require('request-json');
var togo_Host = process.env.toGoHost || "http://127.0.0.1:3002";
var web_az = process.env.web_az || "AZ 1";


exports.findListByRoleId = function (req, res) {
    var id = req.body.id;
    var toGoClient = request.createClient(togo_Host)
    // console.log(imgData)
    // var base64 = 'data:' + mineType.lookup(path) + ';base64,' + data;
    toGoClient.post('findListByRoleId', {id:id}, function (err, cloudres, body) {
        console.log("result:"+JSON.stringify(body))
        // result["image"] = body;
        // result["image_type"] = 'base64';
        // saveResult(path, result)
        body["web_az"] = web_az;
        res.send(body)
    });
};
