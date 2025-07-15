# Design Document

## Overview

Данный документ описывает дизайн оптимизации мобильного интерфейса резюме-сайта с обновленной цветовой палитрой и улучшенным пользовательским опытом. Проект использует React + TypeScript + Tailwind CSS + Framer Motion и требует комплексной оптимизации для мобильных устройств с внедрением новой цветовой схемы на основе предоставленной палитры.

## Architecture

### Цветовая система
Новая цветовая палитра будет интегрирована в существующую систему дизайна:

**Основные цвета:**
- Ocean Blue: `#227C9D` - основной цвет для акцентов и CTA
- Light Sea Green: `#17C3B2` - вторичный цвет для hover состояний
- Sunset: `#FFCB77` - цвет для выделения важной информации
- Floral White: `#FEF9EF` - фоновый цвет для светлой темы
- Light Red: `#FE6D73` - цвет для предупреждений и активных состояний

**Адаптация для темной темы:**
- Ocean Blue: `#3B9BC8` (осветленная версия)
- Light Sea Green: `#20D4C2` (более яркая версия)
- Sunset: `#FFD700` (золотистый оттенок)
- Dark Background: `#1A1A1A` (вместо Floral White)
- Light Red: `#FF7B81` (осветленная версия)

### Responsive Design Strategy

**Breakpoints:**
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

**Layout Approach:**
- Mobile-first дизайн
- Flexbox и CSS Grid для адаптивных макетов
- Fluid typography с использованием clamp()
- Контейнеры с максимальной шириной и центрированием

## Components and Interfaces

### 1. Color System Integration

**Обновление Tailwind конфигурации:**
```typescript
// tailwind.config.ts - новые цвета
colors: {
  ocean: {
    50: '#f0f9ff',
    500: '#227C9D',
    600: '#1e6b85',
    700: '#1a5a6d'
  },
  seagreen: {
    50: '#f0fdfa',
    500: '#17C3B2',
    600: '#14a896',
    700: '#118d7a'
  },
  sunset: {
    50: '#fffbeb',
    500: '#FFCB77',
    600: '#e6b66b',
    700: '#cca15f'
  },
  coral: {
    50: '#fef2f2',
    500: '#FE6D73',
    600: '#e56267',
    700: '#cc575b'
  }
}
```

**CSS переменные для динамического переключения:**
```css
:root {
  --primary: 34 124 157; /* Ocean Blue */
  --secondary: 23 195 178; /* Light Sea Green */
  --accent: 255 203 119; /* Sunset */
  --warning: 254 109 115; /* Light Red */
  --background: 254 249 239; /* Floral White */
}

.dark {
  --primary: 59 155 200;
  --secondary: 32 212 194;
  --accent: 255 215 0;
  --warning: 255 123 129;
  --background: 26 26 26;
}
```

### 2. Header Component Optimization

**Мобильная навигация:**
- Hamburger меню с плавной анимацией
- Overlay navigation с backdrop blur
- Touch-friendly кнопки (минимум 44px)
- Sticky header с прозрачностью

**Элементы управления:**
- Кнопка переключения языка с флагами
- Toggle для темной темы с иконками солнца/луны
- Плавные transitions для всех состояний

### 3. Typography System

**Адаптивные размеры шрифтов:**
```css
/* Заголовки */
h1: clamp(2rem, 5vw, 3.5rem)
h2: clamp(1.5rem, 4vw, 2.5rem)
h3: clamp(1.25rem, 3vw, 1.75rem)

/* Основной текст */
body: clamp(0.875rem, 2.5vw, 1rem)
small: clamp(0.75rem, 2vw, 0.875rem)
```

**Улучшенная читаемость:**
- Оптимальная высота строки (1.6-1.8)
- Достаточный контраст (минимум 4.5:1)
- Комфортная длина строки (45-75 символов)

### 4. Card Components

**Универсальная карточка:**
```typescript
interface CardProps {
  variant: 'default' | 'elevated' | 'outlined';
  padding: 'sm' | 'md' | 'lg';
  rounded: 'sm' | 'md' | 'lg' | 'xl';
  shadow: 'none' | 'sm' | 'md' | 'lg';
}
```

**Адаптивные отступы:**
- Mobile: padding 16px
- Tablet: padding 20px
- Desktop: padding 24px

### 5. Button System

**Размеры кнопок:**
```css
/* Touch-friendly размеры */
.btn-sm: min-height: 36px, padding: 8px 16px
.btn-md: min-height: 44px, padding: 12px 24px
.btn-lg: min-height: 52px, padding: 16px 32px
```

**Состояния кнопок:**
- Default, Hover, Active, Disabled, Loading
- Плавные transitions (200-300ms)
- Визуальная обратная связь для touch

## Data Models

### Theme Configuration
```typescript
interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    warning: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
```

### Responsive Breakpoints
```typescript
interface Breakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  wide: number;
}
```

## Error Handling

### Responsive Image Loading
- Lazy loading для изображений
- Fallback для неподдерживаемых форматов
- Responsive images с srcset

### Touch Event Handling
- Debouncing для предотвращения множественных нажатий
- Graceful degradation для устройств без touch
- Accessibility для screen readers

### Performance Optimization
- Code splitting по компонентам
- Мемоизация тяжелых вычислений
- Виртуализация для длинных списков

## Testing Strategy

### Visual Regression Testing
- Скриншоты компонентов на разных разрешениях
- Тестирование в разных браузерах
- Проверка цветовых схем

### Responsive Testing
- Тестирование на реальных устройствах
- Эмуляция различных viewport размеров
- Проверка touch interactions

### Accessibility Testing
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation
- Focus management

### Performance Testing
- Lighthouse audits
- Core Web Vitals мониторинг
- Bundle size analysis

## Implementation Phases

### Phase 1: Color System Update
1. Обновление Tailwind конфигурации
2. Создание CSS переменных
3. Обновление существующих компонентов

### Phase 2: Mobile Navigation
1. Реализация hamburger меню
2. Overlay navigation
3. Touch-friendly элементы управления

### Phase 3: Typography & Spacing
1. Адаптивные размеры шрифтов
2. Оптимизация отступов
3. Улучшение читаемости

### Phase 4: Component Optimization
1. Обновление карточек
2. Оптимизация кнопок
3. Responsive images

### Phase 5: Testing & Polish
1. Cross-browser testing
2. Performance optimization
3. Accessibility improvements

## Technical Considerations

### CSS-in-JS vs Tailwind
- Использование Tailwind для базовых стилей
- CSS переменные для динамических значений
- Styled-components для сложной логики

### Animation Performance
- Использование transform и opacity для анимаций
- will-change для оптимизации
- Reduced motion support

### Bundle Optimization
- Tree shaking неиспользуемых стилей
- Critical CSS inlining
- Lazy loading компонентов

### Browser Support
- Modern browsers (ES2020+)
- Graceful degradation для старых браузеров
- Progressive enhancement подход