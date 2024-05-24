FROM node

FROM jenkins/jenkins:lts
USER root
COPY --from=0 /usr/local  /usr/local
RUN npm --version
USER jenkins