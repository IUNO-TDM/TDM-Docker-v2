# TDM-Docker-v2

# Docker Build Status


| Repository        | Status|
| ------------- |:-------------:|
| [iuno/tdm-core](https://hub.docker.com/r/iuno/tdm-core/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-core.svg)|
| [iuno/tdm-jms](https://hub.docker.com/r/iuno/tdm-jms/builds/)  | ![](https://img.shields.io/docker/build/iuno/tdm-jms.svg)|
| [iuno/tdm-jmw](https://hub.docker.com/r/iuno/tdm-jmw/builds/)  | ![](https://img.shields.io/docker/build/iuno/tdm-jmw.svg)|
| [iuno/tdm-auth](https://hub.docker.com/r/iuno/tdm-auth/builds/)  | ![](https://img.shields.io/docker/build/iuno/tdm-auth.svg)|
| [iuno/tdm-auth-db](https://hub.docker.com/r/iuno/tdm-auth-db/builds/)  | ![](https://img.shields.io/docker/build/iuno/tdm-auth-db.svg)|
| [iuno/tdm-core-db](https://hub.docker.com/r/iuno/tdm-core-db/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-core-db.svg)|
| [iuno/tdm-payment](https://hub.docker.com/r/iuno/tdm-payment/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-payment.svg)|
| [iuno/tdm-vault](https://hub.docker.com/r/iuno/tdm-vault/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-vault.svg)|
| [iuno/tdm-couponserver](https://hub.docker.com/r/iuno/tdm-couponserver/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-couponserver.svg)|
| [iuno/tdm-mixer](https://hub.docker.com/r/iuno/tdm-mixer/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-mixer.svg)|
| [iuno/tdm-pump](https://hub.docker.com/r/iuno/tdm-pump/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-pump.svg)|
| [iuno/tdm-ams](https://hub.docker.com/r/iuno/tdm-ams/builds/) | ![](https://img.shields.io/docker/build/iuno/tdm-ams.svg)|



# Development Example

Example for fast deployment of website changes

1. Create a src directory next to the Dockerfile in the jmw folder
```
-jmw
--config
--Dockerfile
--src <-- New
```

2. Edit Dockerfile
```
FROM iuno/tdm-jmw:testing

COPY config/ /usr/src/app/config/
# Set ENV Variables
ENV TDM_JMW_CONFIG config_docker
ENV NODE_ENV docker

COPY src/ /usr/src/app/src/
RUN ng build
```

