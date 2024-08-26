# 1. Используем официальное Node.js изображение как базовое для сборки
# В качестве базового образа используем Node.js, чтобы собрать наше приложение
FROM node:18-alpine AS build

# 2. Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# 3. Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь код в контейнер
COPY . .

# 6. Собираем React-приложение для продакшн
RUN npm run build

# 7. Используем официальное изображение Nginx для развёртывания, чтобы запустить собранное приложение
FROM nginx:stable-alpine

# 8. Копируем собранные файлы из предыдущего этапа в корневую директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Копируем конфигурацию Nginx (необязательно, можно использовать стандартную)
# COPY nginx.conf /etc/nginx/nginx.conf

# 10. Экспонируем порт 80 для веб-сервера
EXPOSE 80

# 11. Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
