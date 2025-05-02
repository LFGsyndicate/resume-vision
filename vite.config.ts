import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// import { componentTagger } from "lovable-tagger"; // Оставьте, если используете

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => { // Добавили command и mode
  const config = {
    plugins: [
      react(),
      // (mode === 'development' && componentTagger()), // Включите, если нужно только в разработке
    ].filter(Boolean), // filter(Boolean) удалит false из массива плагинов
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Базовый URL по умолчанию для разработки - корень
    base: '/',
    server: {
       host: "::",
       port: 8080,
    },
  };

  // !!! ВАЖНО: Устанавливаем base только для ПРОДАКШН-СБОРКИ !!!
  if (command === 'build') {
    // Убедитесь, что имя репозитория ТОЧНО 'resume-vision'
    // Путь должен начинаться и заканчиваться слэшем '/'
    config.base = '/resume-vision/';
  }

  return config;
});
