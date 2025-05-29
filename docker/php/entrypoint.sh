#!/bin/sh

# Set permissions
chown -R www-data:www-data /var/www/html

# Link storage and public folders
php artisan storage:link

# Generate application key (--force is needed in production to bypass the confirmation)
php artisan key:generate --force

# Execute the specified command in the Dockerfile (CMD ["command"])
exec "$@"
