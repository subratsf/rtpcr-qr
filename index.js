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
    var tempFile="./Keshav_Marodia_RTPCR.pdf";
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

app.get('/8800777328w3090385', (req, res) => {
    var tempFile="./Deepak_Bajaj.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/8586969484w3090397', (req, res) => {
    var tempFile="./Mohita_Upadhyay.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/121130540', (req, res) => {
    var tempFile="./Deepika_Rakesh_Shukla.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.get('/121130537', (req, res) => {
    var tempFile="./Alok_Kumar_Joshi.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(port, () => {
  console.log(`RTPCR listening on port ${port}!`)
});
