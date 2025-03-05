## Manual Installation
 - Install Nodejs locally
 - Clone the repo
 - Install dependencies (npm install)
 - Start the DB locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new DB
 - Change the .env file and update your DB credentials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start

## Docker Installation
 - Clone the repo
 - Install docker
 - Build app docker image (docker build -t my-app .)
 - Create network for docker container
    - docker network create -d brodge my-app-network
 - Start the DB container
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 --network=my-app-network postgres
 - Start the app container
    - docker run -e DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/mydb?schema=public" -d -p 3000:3000 --network=my-app-network my-app

## Docker Compose Installation
 - Install docker, docker-compose
 - Run `docker-compose up`