#!/bin/sh

cd /woven_app

sh bin/woven-app.sh start

sleep 5

exec "$@"

