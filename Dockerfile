FROM node:carbon

ADD . /opt/web-app/app

WORKDIR /opt/web-app/app

ENV NODE_ENV production

RUN npm install

# Expose port
EXPOSE 3000

# Start the apa

ENTRYPOINT node server.js