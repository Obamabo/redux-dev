const express = require('express');
const mongoose = require('mongoose');
// // 连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/junbo';
mongoose.connect(DB_URL, { useNewUrlParser: true });
// 连接
mongoose.connection.on('connected', function() {
    console.log('mongo connect success');
})
// 链接异常
mongoose.connection.on('error',function (err) {    
    console.log(err);  
});
// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: { type:String, require:true },
    age: { type:Number, require:true }
}))
// 新增数据
// User.create({
//     user: 'chenjunbo',
//     age: 26
// }, function(err, doc) {
//     if(!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })
// User.remove({age:10}, function(err,doc) {
//     console.log(doc);
// })
// User.update({'user':'chenjunbo'},{'$set':{age:18}},function(err,doc) {
    // console.log(doc);
// })
// 新建app
const app = express();
app.get('/', function(req, res) {
    res.send('<h1>hello world</h1>')
})
app.get('/data', function(req, res) {
    User.findOne({'user': 'chenjunbo'}, function(err, doc) {
        res.json(doc);
    })
})
app.listen(9093,function() {
    console.log('Node app start at port 9093!')
})