FROM php:8.2-fpm

COPY composer.json /var/www/

WORKDIR /var/www

RUN apt-get update \
    && apt-get install -y \
    gnupg \
    zip \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo_mysql

# Очищаем кэш
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Загружаем актуальную версию Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Создаём пользователя и группу www для приложения Laravel
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Копируем содержимое текущего каталога в рабочую директорию
COPY . /var/www
RUN composer update

COPY --chown=www:www . /var/www

# Меняем пользователя на www
USER www



# В контейнере открываем 9000 порт и запускаем сервер php-fpm
EXPOSE 9000

