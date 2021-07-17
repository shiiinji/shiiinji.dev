# base image
FROM node:16-alpine

# working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy app files and build
COPY . /app
RUN yarn install
RUN yarn build

ENV PORT 8080

EXPOSE 8080

# Run Next.js
CMD ["yarn", "start"]
