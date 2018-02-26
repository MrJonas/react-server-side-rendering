FROM node:carbon

ADD . /opt/web-app/app

WORKDIR /opt/web-app/app

RUN npm install
RUN npm run build

# Expose port
EXPOSE 3010

# Start the app
ENV NODE_ENV production

ENTRYPOINT node server.js