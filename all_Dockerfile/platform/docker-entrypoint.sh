#!/bin/sh

cd /woven_platform

echo "boot ......" > ./bootup.log

WOVEN_SERVER=woven_server
WOVEN_DISCOVERY=woven_discovery
WOVEN_PIPELINE=woven_pipeline
WOVEN_EXECUTOR_DF=woven_executor_df
WOVEN_EXECUTOR_MORE=woven_executor_more
WOVEN_LIVY=woven_livy

echo "boot component: ${WOVEN_BOOT,,}" >> ./bootup.log

if [ x"${WOVEN_SERVER,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/woven-server.sh start


elif [ x"${WOVEN_DISCOVERY,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/woven-discovery.sh start


elif [ x"${WOVEN_PIPELINE,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/pipeline-server.sh start


elif [ x"${WOVEN_EXECUTOR_DF,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/df-executor.sh start


elif [ x"${WOVEN_EXECUTOR_MORE,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/more-executors.sh start


elif [ x"${WOVEN_LIVY,,}" == x"${WOVEN_BOOT,,}" ]
then
    bin/livy-server.sh start

else
    echo "invalid boot component: ${WOVEN_PLATFORM_BOOT,,}" >> ./bootup.log
    exit 0

fi

sleep 5

exec "$@"
