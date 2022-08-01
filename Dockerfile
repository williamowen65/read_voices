FROM node

RUN npm i -g firebase-tools

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g heroku

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
