#!/usr/bin/env bash

#export JAVA_HOME=/usr/jdk64/jdk1.8.0_77
export HADOOP_CONF_DIR=/etc/hadoop/conf
export HADOOP_USER_NAME=hdfs
export WOVEN_LOGSERVER_HOME=`cd $(dirname $0)/..; pwd`
export WOVEN_LOGSERVER_CONF=${WOVEN_LOGSERVER_CONF:-${WOVEN_LOGSERVER_HOME}/conf}
export WOVEN_LOGSERVER_LOG_DIR=${WOVEN_LOGSERVER_LOG_DIR:-${WOVEN_LOGSERVER_HOME}/log}

export JAVA_CMD=${JAVA_HOME}/bin/java

export JVM_OPTS="-Xms4096M -Xmx4096M -Xmn1024M -Xss256K -Djava.awt.headless=true -Dfile.encoding=UTF-8"
