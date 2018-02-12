FROM node:8.9-alpine

COPY . .

RUN npm install --production

CMD ["npm", "start"]
