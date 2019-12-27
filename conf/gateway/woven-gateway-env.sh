#!/usr/bin/env bash

set -e
#export JAVA_HOME=${JAVA_HOME}     #custom sample: export JAVA_HOME=${JAVA_HOME:-'/usr/jdk64/jdk1.8.0_77'}
export JAVA_CMD=${JAVA_HOME}/bin/java
export GATEWAY_HOME=`cd $(dirname $0)/..; pwd`
export GATEWAY_CONF=${GATEWAY_CONF:-${GATEWAY_HOME}/conf}
export GATEWAY_LOGS_DIR=${GATEWAY_HOME}/logs

## set extra jar dirs
#export WOVEN_GATEWAY_EXTRA_LIBS="/usr/hdp/current/hbase-client/lib,xxxx/jars"

WOVEN_GATEWAY_JVM_OPTS="-Xmx4g"
