# FROM ubuntu:22.04

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

FROM node:14

COPY . /f8b4-team05-client/
WORKDIR /f8b4-team05-client/

RUN yarn install
RUN yarn build
CMD yarn start
