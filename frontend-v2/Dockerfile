FROM node:20

RUN apt-get update && apt-get install -y \
    build-essential \
    zlib1g-dev \
    libbz2-dev \
    liblzma-dev \
    autoconf \
    git \
    wget

#Creates directories
RUN mkdir -p /usr/src/app


#Sets an environment variable
ENV PORT 3000

##Copy new files or directories into the filesystem of the container
COPY . /usr/src/app

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app/

# RUN git clone https://github.com/dome/dex2.git

#Copy new files or directories into the filesystem of the container
#COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app

#Execute commands in a new layer on top of the current image and commit the results
RUN npm install -g pnpm@9.4
#WORKDIR /usr/src/app/dex2/frontend

RUN pnpm i

#Execute commands in a new layer on top of the current image and commit the results
RUN pnpm build

#Informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 3000

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["pnpm", "start"]
