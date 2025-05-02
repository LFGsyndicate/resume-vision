import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// Возможно, у вас есть другие импорты, оставьте их
// import { componentTagger } from "lovable-tagger"; // Оставляем, если нужен

// https://vitejs.dev/config/
export default defineConfig(({ command }) => { // Используем command, чтобы определить режим
  const config = {
    plugins: [
      react(),
      // componentTagger(), // Оставляем, если нужен
      // Добавьте другие плагины, если есть
    ],
    resolve: { // Хорошая практика - добавить алиас для src
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Базовый URL по умолчанию для разработки - корень
    base: '/',
    // Можно оставить настройки server для локальной разработки
    server: {
       host: "::",
       port: 8080, // или ваш порт
    },
  };

  // Если команда - это сборка для продакшена (т.е. 'npm run build' или 'bun run build')
  if (command === 'build') {
    // Устанавливаем базовый URL для GitHub Pages
    // Замените '/resume-vision/' на '/имя-вашего-репозитория/'
    config.base = '/resume-vision/';
  }

  return config;
});
