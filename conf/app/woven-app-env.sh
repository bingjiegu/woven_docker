#!/usr/bin/env bash

#export JAVA_HOME=/usr/lib/jvm/java-8-oracl
export JAVA_CMD=${JAVA_HOME}/bin/java
export YARN_CONF_DIR=/etc/hadoop/conf
export SPARK_HOME=/app/spark2.4
export WOVEN_APP=woven
export HADOOP_USER_NAME=merce
export WOVEN_HOME=`cd $(dirname $0)/..; pwd`

## set extra jar dirs
#export WOVEN_APP_EXTRA_LIBS="/usr/hdp/current/hbase-client/lib,xxxx/jars"

WOVEN_SERVER_JVM_OPTS="-Xmx4g"
