# ThemeProvider в архитектуре FSD

## Структура

### 1. `shared/lib/theme/` - Базовая логика тем
```
shared/lib/theme/
├── types.ts          # Типы для тем
├── constants.ts      # Константы (ключи, значения по умолчанию)
├── utils.ts          # Утилиты для работы с localStorage и DOM
├── useTheme.ts       # Хук для управления темами
└── index.ts          # Публичный API
```

**Принципы:**
- Содержит только бизнес-логику без UI
- Не зависит от React Context
- Может использоваться в любом слое приложения

### 2. `app/providers/ThemeProvider/` - Провайдер для приложения
```
app/providers/ThemeProvider/
├── ui/ThemeProvider.tsx  # React Context Provider
└── index.ts              # Публичный API
```

**Принципы:**
- Создает React Context для всего приложения
- Использует логику из `shared/lib/theme`
- Предоставляет `useThemeContext` хук

### 3. `features/toggle-theme/` - Фича переключения тем
```
features/toggle-theme/
├── ui/ToggleTheme.tsx    # UI компонент
└── index.ts              # Публичный API
```

**Принципы:**
- Использует `useThemeContext` из провайдера
- Содержит только UI логику
- Изолированная фича

## Интеграция

### В `main.tsx`:
```tsx
import { ThemeProvider } from '../providers/ThemeProvider'

<ThemeProvider>
  <App />
</ThemeProvider>
```

### В компонентах:
```tsx
import { useThemeContext } from '../../../app/providers/ThemeProvider'

const { theme, toggleTheme, setTheme } = useThemeContext()
```

## Преимущества такой архитектуры

1. **Разделение ответственности**: логика отделена от UI
2. **Переиспользование**: `shared/lib/theme` можно использовать везде
3. **Тестируемость**: каждый слой можно тестировать отдельно
4. **Масштабируемость**: легко добавлять новые фичи тем
5. **Соответствие FSD**: правильное размещение по слоям

## Использование

1. **Переключение темы**: `toggleTheme()`
2. **Установка конкретной темы**: `setTheme('dark')`
3. **Получение текущей темы**: `theme`
4. **Автоматическое сохранение**: в localStorage
5. **Автоматическое применение**: к DOM