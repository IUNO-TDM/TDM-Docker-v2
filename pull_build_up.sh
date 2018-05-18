#!/usr/bin/env bash

set -ex

docker-compose --project-name tdm build --pull
docker-compose --project-name tdm up -d