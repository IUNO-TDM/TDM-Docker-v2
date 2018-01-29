# TDM-Docker-v2

# Docker Build Status


| Repository        | Status|
| ------------- |:-------------:|
| iuno/tdm-core | ![](https://img.shields.io/docker/build/iuno/tdm-core.svg)|
| iuno/tdm-jms  | ![](https://img.shields.io/docker/build/iuno/tdm-jms.svg)|
| iuno/tdm-jmw  | ![](https://img.shields.io/docker/build/iuno/tdm-jmw.svg)|
| iuno/tdm-auth  | ![](https://img.shields.io/docker/build/iuno/tdm-auth.svg)|
| iuno/tdm-auth-db  | ![](https://img.shields.io/docker/build/iuno/tdm-auth-db.svg)|
| iuno/tdm-core-db | ![](https://img.shields.io/docker/build/iuno/tdm-core-db.svg)|
| iuno/tdm-payment | ![](https://img.shields.io/docker/build/iuno/tdm-payment.svg)|
| iuno/tdm-vault | ![](https://img.shields.io/docker/build/iuno/tdm-vault.svg)|
| iuno/tdm-couponserver | ![](https://img.shields.io/docker/build/iuno/tdm-couponserver.svg)|
| iuno/tdm-mixer | ![](https://img.shields.io/docker/build/iuno/tdm-mixer.svg)|
| iuno/tdm-pump | ![](https://img.shields.io/docker/build/iuno/tdm-pump.svg)|



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

