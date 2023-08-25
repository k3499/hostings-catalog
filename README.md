# Сервис поиска промокодов и скидок для хостингов

Сайт каталог промокодов для хостингов, выполненный с использованием системы реактивности страниц React js. При этом страницы статически генерируются с помощью Next js. В качестве бэкэнда используется Headless CMS - Strapi в связке с базой SQLite. Верстка сайта адаптивна и выполнена с использованием Flex box. На сайте реализована форма отправки предложений о публикации сайта с записью в strapi с превалидацией данных на клиентской стороне.

Для подгрузки дополнительных элементов и активной ревалидации данных использована библиотека SWR. При этом SSG генерация страниц сайта не нарушена, так как статически сгенерированные данные используются первично при загрузки и уже после ревалидации заменяются актуальными.

Сайт имеет рабочую версию - [hostoncoast.ru](https://hostoncoast.ru/).

При размещении сайта была произведена настройка VDS (Node js, Nginx, pm2)

## Технологии

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [SWR](https://swr.vercel.app/ru)
- [Strapi](https://strapi.io/)

<p align="left"><img height="42" width="42" src="https://cdn.simpleicons.org/React/#61DAFB" alt="React"/>
<img height="42" width="42" src="https://cdn.simpleicons.org/Next.js/#000000" alt="Next.js"/></p>

## Установка

1. Клонируйте репозиторий: `git clone git@github.com:k3499/hostings-catalog.git`
2. Перейдите в директорию проекта: `cd nextjs-coupon`
3. Установите зависимости: `npm install`
4. Перейдите в директорию strapi: `cd nextjs-coupon/couponCMS`
5. Установите зависимости: `npm install`

## Использование

1. Запустите Strapi для управления контентом (инструкции по настройке Strapi можно найти в соответствующем разделе ниже).
2. Запустите React.js и Next.js приложение: `npm run dev`

## Настройка Strapi

1. Перейдите в директорию `nextjs-coupon/couponCMS`
2. Установите зависимости: `npm install`
3. Сгенерируйте билд: `npm run build`
4. Запустите Strapi: `npm run develop`
