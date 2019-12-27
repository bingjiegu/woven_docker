#!/bin/sh

cd /woven_gateway

sh bin/woven-gateway.sh start

sleep 5

exec "$@"
