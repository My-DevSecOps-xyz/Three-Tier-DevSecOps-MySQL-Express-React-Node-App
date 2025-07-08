
# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# # Install mysql-client for mysqladmin
# RUN apk add --no-cache mysql-client
# # Copy and make wait script executable
# COPY wait-for-mysql.sh /app/wait-for-mysql.sh
# RUN chmod +x /app/wait-for-mysql.sh
# ENTRYPOINT ["/app/wait-for-mysql.sh"]
# CMD ["npm", "app.js"]





# FROM node:22-alpine

# # Create app directory
# WORKDIR /usr/src/app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy rest of the app files
# COPY . .

# # Make wait-for-mysql.sh executable
# RUN chmod +x ./wait-for-mysql.sh

# # Expose backend port
# EXPOSE 4000

# # Start app via the wait script
# CMD ["./wait-for-mysql.sh"]






# FROM node:22-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# EXPOSE 4000
# # Copy the wait-for-mysql.sh script into the container
# # This script is used to wait for the MySQL service to be ready before starting the Node.js application
# COPY wait-for-mysql.sh .                     
# RUN chmod +x wait-for-mysql.sh
# ENTRYPOINT ["./wait-for-mysql.sh"]
# CMD ["node", "app.js"]


# FROM node:22-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# EXPOSE 4000
# # Copy the wait-for-mysql.sh script into the container
# # This script is used to wait for the MySQL service to be ready before starting the Node.js application
# COPY wait-for-mysql.sh .                     
# RUN chmod +x wait-for-mysql.sh
# ENTRYPOINT ["./wait-for-mysql.sh"]
# CMD ["node", "app.js"]


FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

COPY . .
EXPOSE 4000
CMD ["node", "app.js"]