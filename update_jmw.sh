#!/usr/bin/env bash

SERVICE=jmw

set -ex

docker-compose --project-name tdm stop ${SERVICE}
docker-compose --project-name tdm build ${SERVICE}
docker-compose --project-name tdm up -d