FROM node:10.19.0

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./


# Bundle app source
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

