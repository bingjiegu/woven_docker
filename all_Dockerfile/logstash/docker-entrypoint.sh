#!/bin/sh

cd /logstash

sh bin/logstash -f config/woven-es.cfg &

sleep 5

exec "$@"

