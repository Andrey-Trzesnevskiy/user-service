FROM node:12

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json 
# AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm i

# Bundle app source
COPY . .

# Build the app
RUN npm run build

EXPOSE 8080

# run CMD command "yarn start:prod"
CMD [ "node", "dist/main.js" ]
