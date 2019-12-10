export SPARK_DIST_CLASSPATH=/etc/hadoop:/opt/hadoop-2.8.1/share/hadoop/common/lib/*:/opt/hadoop-2.8.1/share/hadoop/common/*:/opt/hadoop-2.8.1/share/hadoop/hdfs:/opt/hadoop-2.8.1/share/hadoop/hdfs/lib/*:/opt/hadoop-2.8.1/share/hadoop/hdfs/*:/opt/hadoop-2.8.1/share/hadoop/yarn/lib/*:/opt/hadoop-2.8.1/share/hadoop/yarn/*:/opt/hadoop-2.8.1/share/hadoop/mapreduce/lib/*:/opt/hadoop-2.8.1/share/hadoop/mapreduce/*:/contrib/capacity-scheduler/*.jar
export HADOOP_CONF_DIR=/etc/hadoop
hdfs dfs -mkdir /tmp/spark-events
