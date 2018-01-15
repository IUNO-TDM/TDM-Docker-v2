# TDM-Docker-v2


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

