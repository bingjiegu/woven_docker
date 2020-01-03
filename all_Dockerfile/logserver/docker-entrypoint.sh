#!/bin/sh

cd /woven_logserver

sh bin/woven-logserver.sh start

sleep 5

exec "$@"

