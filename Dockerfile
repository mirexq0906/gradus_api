FROM php:8.3-fpm

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

WORKDIR /var/www

RUN apt-get update \
    && apt-get install -y \
    gnupg \
    zip \
    unzip

# Очищаем кэш
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем расширения PHP
RUN docker-php-ext-install pdo_mysql

# Загружаем актуальную версию Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Создаём пользователя и группу www для приложения Laravel
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Копируем содержимое текущего каталога в рабочую директорию
COPY --chown=www:www . /var/www
COPY --chown=www:www .env /var/www

# Выставляем права на директории node_modules и vendor
RUN mkdir -p /var/www/vendor \
    && chown -R www:www /var/www/vendor

# Меняем пользователя на www
USER www

RUN composer update

# В контейнере открываем 9000 порт и запускаем сервер php-fpm
EXPOSE 9000

# CMD ["php-fpm"]

