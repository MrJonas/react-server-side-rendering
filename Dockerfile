FROM node:carbon

ADD . /opt/web-app/app

WORKDIR /opt/web-app/app

ENV NODE_ENV production

RUN npm install

# Expose port
EXPOSE 3010

# Start the apa

ENTRYPOINT node server.js