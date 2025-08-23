
# Mongo DB 事务 修改配置文件:
前往
````
C:\Program Files\MongoDB\Server\8.0\bin\mongod.cfg
````
添加
注意Tab，跟预设配置一致，必须间距一样
````
replication: 
  replSetName: rs0
````


## 重启 MongoDB 服务:
````
net stop MongoDB
````
````
net start MongoDB
````

## 初始化: 
下载mongoDB shell

打开 进入 ADMIN 数据库
````
use admin
````
确认进去admin后

输入:
````
rs.initiate()
````

## 确认

在 mongosh 里看:
````
rs.status()
````
如果 members 为空，或者状态不是 PRIMARY，那就是配置问题。