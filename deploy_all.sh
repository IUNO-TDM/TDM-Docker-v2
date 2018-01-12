#!/usr/bin/env bash

set -ex

docker-compose --project-name tdm down
docker-compose --project-name tdm up -d