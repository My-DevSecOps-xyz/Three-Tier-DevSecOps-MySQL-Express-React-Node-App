FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 4000
# Copy the wait-for-mysql.sh script into the container
# This script is used to wait for the MySQL service to be ready before starting the Node.js application
COPY wait-for-mysql.sh .                     
RUN chmod +x wait-for-mysql.sh
ENTRYPOINT ["./wait-for-mysql.sh"]
CMD ["node", "app.js"]


# FROM node:22-alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production

# COPY . .
# EXPOSE 4000
# CMD ["node", "app.js"]