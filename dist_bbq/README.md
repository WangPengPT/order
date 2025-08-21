
# Mongo DB 事务 修改配置文件:
前往
````
C:\Program Files\MongoDB\Server\8.0\bin\mongod.cfg
````
添加
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

输入指令
````
mongod --dbpath /var/lib/mongodb --replSet rs0
````


确保mongod确保已经添加进环境变量

打开 Compass / mongosh，执行： 
进入指定数据库

查看所有数据库:
````
show dbs
````
````
use [数据库名字]
````

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