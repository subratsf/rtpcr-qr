const express = require('express')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 8000;

app.get('/190119603500', (req, res) => {
    var tempFile="./Rajesh_Thakur_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/140119915347', (req, res) => {
    var tempFile="./Megha_Kumari_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/121020009297755244', (req, res) => {
    var tempFile="./Keshav_Marodia_13th_Nov_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/8143724968', (req, res) => {
    var tempFile="./Vishal_Khemani_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/6309018871071191', (req, res) => {
    var tempFile="./Subrat_Thakur_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/6309037058041191', (req, res) => {
    var tempFile="./Jigyasha_Kumari_RTPCR.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(port, () => {
  console.log(`RTPCR listening on port ${port}!`)
});
