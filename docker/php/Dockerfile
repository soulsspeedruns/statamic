FROM php:8.4-cli AS vendor

# Set the working directory
WORKDIR /app

RUN apt-get update -y && apt-get install -y \
    git

# Install PHP extensions
RUN docker-php-ext-install \
    pcntl \
    sockets

# Clone the repository
RUN git clone https://github.com/soulsspeedruns/statamic.git .

# Install composer dependencies
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN composer install --no-dev --optimize-autoloader

# https://hub.docker.com/_/node/
FROM node:24 AS node

# Set the working directory
WORKDIR /app

# Clone the repository
COPY --from=vendor /app /app

# Install npm dependencies and build
RUN npm install
RUN npm run build

# https://hub.docker.com/_/php/
FROM php:8.4-fpm

# Move the files
COPY --from=node /app /var/www/html
WORKDIR /var/www/html

# Basic updates
RUN apt-get update -y && apt-get install -y \
    curl \
    git \
    zip \
    unzip \
    unzip \
    supervisor

# Install PHP extensions
RUN docker-php-ext-install \
    pcntl \
    sockets

# Set up artisan stuff
RUN touch .env
RUN php artisan key:generate

# Copy the entrypoint file to the working directory
COPY ./entrypoint.sh /usr/local/bin/

# Make the file executable
RUN chmod +x /usr/local/bin/entrypoint.sh

# Start the app
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Setup production php
RUN cp $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini

EXPOSE 9000
CMD ["php-fpm"]
