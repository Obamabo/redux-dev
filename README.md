## 这是一个以create-react-app为脚手架，使用react+redux+react-router搭建前端页面，使用express+mongodb搭建后端接口的小型个人项目；

### 说明：
1、命令：执行 npm install 安装需要的依赖；<br/>
2、下载配置好[mongodb](https://www.runoob.com/mongodb/mongodb-tutorial.html);<br/>
3、建议全局安装依赖[nodemon](https://www.cnblogs.com/chris-oil/p/6239097.html)，命令：npm install -g nodemon;如果没有安装，每次修改server/server.js文件后，都要中断服务，然后重新执行node server.js;安装nodemon后，如果修改server.js保存之后，nodemon会帮你启动应用；<br/>
4、在项目中执行命令：npm run start，启动前端服务；<br/>
5、在server目录下执行：nodemon server.js，启动后端服务；如果可以正常访问http://localhost:9093/ 端口，说明服务已经跑起来了；此时，直接访问接口：http://localhost:9093/data 只会看到一个空数组；<br/>
6、增删改数据库中的数据：<br/>![mongodb增删改截图]("./imgs/mongodb.png")<br/>
如截图中代码所示，如果你想要添加一条数据，直接解除下面这部分代码的注释：
      <pre>
        User.create({
            user: 'xiaoming',
            age: 16
        }, function(err, doc) {
            if(!err) {
                console.log(doc);
            } else {
                console.log(err);
            }
        })
      </pre>
修改user和age，每次保存，刷新http://localhost:9093/data 页面都可以看到新添加的一条数据添加，例如下所示：
![单条数据格式]("./imgs/data.png")<br/>
移除数据和修改数据类比新增数据，注意：<br/>
1> 增删改的时候，注意单一进行一个操作，然后注释其他的操作，不然数据会多个操作同事进行；<br/>
2> 查找数据库的方法是find和findeOne；<br/>
