#!/usr/bin/env bash

SERVICE=auth-db

set -ex


docker-compose --project-name tdm stop ${SERVICE}
docker-compose --project-name tdm build ${SERVICE}
docker-compose --project-name tdm up -d