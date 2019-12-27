# woven_docker
目录说明
all_Dockerfile: 打包镜像时需要使用的Dockerfile及entrypoint.sh文件。
all_conf_file: platform，wovenAPP， gateway使用的配置文件。下载后只需替换本地对应的文件即可
compose_yaml: docker compose yaml file. 
              使用顺序: 
              1.docker=compose -f consul.yaml up -d   # 新建consul容器
              2.docker-compose -f docker-compose-hdfs-yarn-spark.yaml up -d  # 新建Hadoop集群需要使用的服务
              3.docker-compose -f mysql.yaml -f platform.yaml -f woven_app.yaml -f gateway.yaml # 新建MySQL容器，platform各组件容器，APP容器，gateway容器。请注意，因其他服务存在对MySQL的依赖，所以需要和MySQL同时拉起。
              
