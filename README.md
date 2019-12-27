# woven_docker
目录说明：

all_Dockerfile: 
打包镜像时需要使用的Dockerfile及entrypoint.sh文件                                                                         

all_conf_file: 
platform，wovenAPP， gateway使用的配置文件。下载后只需替换本地对应的文件即可                                                     

compose_yaml: docker compose yaml file。 
需放在本地/app/merce目录下。
使用compose yaml文件拉起服务的顺序如下:
1.docker=compose -f consul.yaml up -d   # 新建consul容器                                                                         
2.docker-compose -f docker-compose-hdfs-yarn-spark.yaml up -d  # 新建Hadoop集群需要使用的服务                                           
3.docker-compose -f mysql.yaml -f platform.yaml -f woven_app.yaml -f gateway.yaml # 新建MySQL容器，platform各组件容器，APP容器，gateway容器。
请注意，因其他服务存在对MySQL的依赖，所以需要和MySQL同时拉起。

etc-hadoop-conf：
本地Hadoop集群目录。请将所有文件放置在本地/etc/hadoop/conf目录下                                                             
     
mytmp-file：
spark容器及其他Hadoop容器需要使用的文件。该目录下的所有文件请放置在本地/mytmp目录下。本地/mytmp目录为spark等其他容器的挂载目录

sql_file：
数据库使用的SQL文件
使用方法：
1. init_mysql目录下的SQL文件，需放在本地/mysql/init目录下，为第一次新建MySQL容器进行数据库初始化的脚本。
2. update_tables目录下的SQL文件，请在第一次全部服务拉起后，通过连接MySQL客户端的形式执行SQL文件（也可以进入MySQL容器进行操作）以更新SQL文件中对应的表结构。
数据库连接方式： 主机名：hostIP, 端口号：3306， 用户名：root， 密码：merce（数据库默认密码为merce）
              
