FROM node:carbon

ADD . /opt/web-app/app

WORKDIR /opt/web-app/app

RUN npm install
RUN npm run build

# Expose port
EXPOSE 3000
ENV NODE_ENV production
# Start the apa

ENTRYPOINT node dist-server/server.js