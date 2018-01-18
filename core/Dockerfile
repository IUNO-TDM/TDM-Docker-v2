FROM iuno/tdm-core:master

COPY config/ /usr/src/app/config/
COPY cert/ /usr/src/app/cert/

# Set ENV Variables
ENV TDM_CORE_CONFIG config_docker
ENV NODE_ENV docker