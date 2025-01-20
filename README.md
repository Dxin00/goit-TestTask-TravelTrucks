# Інструкція зі встановлення та запуску проекту TravelTrucks

## Опис проекту
Проект **TravelTrucks** - це веб-додаток для бронювання кемперів для подорожей. Розроблено з використанням React та Vite.

## Вимоги
Перед початком роботи переконайтеся, що у вас встановлено:

- [Node.js](https://nodejs.org/) версії 16 або новішої
- [npm](https://www.npmjs.com/) (входить до складу Node.js)

## Кроки для запуску проекту

### 1. Клонування репозиторію
Склонуйте репозиторій на ваш локальний комп'ютер:

```bash
git clone <URL-репозиторія>
```

Перейдіть у директорію проекту:

```bash
cd goit-TestTask-TravelTrucks-main
```

### 2. Встановлення залежностей
Встановіть необхідні залежності за допомогою npm:

```bash
npm install
```

### 3. Запуск проекту
Для запуску проекту у режимі розробки виконайте команду:

```bash
npm run dev
```

Відкрийте браузер і перейдіть за адресою, яка з'явиться в консолі (зазвичай `http://localhost:5173`).

### 4. Збірка проекту
Щоб зібрати проект для продакшн, використовуйте команду:

```bash
npm run build
```

Зібрані файли будуть збережені в директорії `dist`.

### 5. Попередній перегляд зібраного проекту
Для попереднього перегляду зібраного проекту виконайте команду:

```bash
npm run preview
```

## Структура проекту

- `src/` - вихідний код проекту
  - `components/` - компоненти React
  - `pages/` - сторінки додатку
  - `assets/` - зображення та інші ресурси
  - `redux/` - стейт-менеджмент з використанням Redux

- `index.html` - головна HTML-сторінка
- `package.json` - файл конфігурації npm
- `vite.config.js` - файл конфігурації Vite

## Додаткова інформація
- Якщо виникли проблеми, перевірте правильність версій Node.js і npm.
- Для перевірки стилів коду використовуйте ESLint:

```bash
npm run lint
```

- Конфігурація ESLint знаходиться у файлі `.eslintrc`.

## Ліцензія
Цей проект має відкритий код. Деталі дивіться у файлі LICENSE (якщо присутній).

