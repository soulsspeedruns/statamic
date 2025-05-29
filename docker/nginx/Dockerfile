# We need to start from PHP to composer install before
# We can run npm install and build the assets because we
# need the vendor files to be present for the build process.
# This is caused by the use of the Flux UI library which has
# tailwind classes in the PHP files.
FROM php:8.4-fpm as php

# Install system dependencies and PHP extensions for Laravel with MySQL/PostgreSQL support.
# Dependencies in this stage are only required for building the final image.
# Node.js and asset building are handled in the Nginx stage, not here.
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    unzip \
    libpq-dev \
    libonig-dev \
    libssl-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libicu-dev \
    libzip-dev \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    pdo_pgsql \
    pgsql \
    opcache \
    intl \
    zip \
    bcmath \
    soap \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install PHP extensions
RUN docker-php-ext-install \
    sockets \
    pcntl \
    curl \
    zip

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy the application files into the container
COPY . .

# Install Composer and dependencies
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress --prefer-dist

# Now switch to Node.js for building assets
FROM node:latest AS node

RUN apt-get update

WORKDIR /var/www/html

COPY --from=php /var/www/html .

RUN npm install

RUN npm run build

# Finally switch to Nginx to serve the application
FROM nginx:alpine

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Only copy the public files from the Node stage
COPY --from=node /var/www/html/public /var/www/html/public

WORKDIR /var/www/html/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
