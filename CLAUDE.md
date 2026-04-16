# CLAUDE.md — Project Guide

## 1. Название проекта и описание

**Landing Test** — это modern landing page проект на базе React и TypeScript. Проект использует Vite как сборщик и предоставляет готовую архитектуру для разработки интерактивных landing-страниц с использованием UI-компонентов (shadcn).

## 2. Tech Stack

- **Language:** TypeScript 5.8.3 (97.3% проекта)
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.19 с SWC для компиляции
- **UI Library:** shadcn/ui (Radix UI компоненты)
- **Styling:** Tailwind CSS 3.4.17 с CSS variables (HSL colors)
- **Forms:** React Hook Form 7.61.1 + Zod для валидации
- **Routing:** React Router DOM 6.30.1
- **State Management:** TanStack React Query 5.83.0
- **Notifications:** Sonner (toast notifications)
- **Animations:** Framer Motion 11.0.0
- **Icons:** Lucide React
- **Testing:** Vitest 3.2.4 + Playwright 1.57.0
- **Linting:** ESLint 9.32.0 + TypeScript ESLint 8.38.0
- **Code Generation:** Lovable Tagger (для component tagging в dev режиме)

## 3. Project Structure

```
project/
├── src/
│   ├── components/          # Переиспользуемые компоненты (UI + custom)
│   │   └── ui/             # shadcn/ui компоненты (кнопки, диалоги, формы)
│   ├── pages/              # Страницы приложения (Index, NotFound)
│   ├── hooks/              # Кастомные React hooks
│   ├── lib/                # У��илиты и helper функции
│   ├── test/               # Тесты и test fixtures
│   ├── App.tsx             # Главный App компонент с маршрутизацией
│   ├── main.tsx            # Entry point
│   └── index.css           # Глобальные стили + Tailwind directives
├── public/                 # Статические файлы
├── index.html              # HTML template
├── vite.config.ts          # Vite конфигурация (port 8080, HMR без overlay)
├── tailwind.config.ts      # Tailwind конфигурация (dark mode, colors, fonts)
├── tsconfig.json           # TypeScript конфигурация главная
├── tsconfig.app.json       # TypeScript для приложения
├── tsconfig.node.json      # TypeScript для Vite/build tools
├── eslint.config.js        # ESLint правила (React, Hooks, TypeScript)
├── components.json         # shadcn/ui конфигурация с aliases
├── postcss.config.js       # PostCSS (для Tailwind)
├── vitest.config.ts        # Unit тестирование
├── playwright.config.ts    # E2E тестирование
└── package.json            # Dependencies и scripts

```

### Ключевые папки:
- **`src/components/ui/`** — shadcn компоненты (Accordion, Dialog, Form, Button и т.д.)
- **`src/pages/`** — page компоненты (Index.tsx — главная, NotFound.tsx — 404)
- **`src/hooks/`** — кастомные hooks для логики
- **`src/lib/`** — утилиты (например, cn() для объединения Tailwind классов)

## 4. Conventions

### Коммиты
- Используй prefix-based коммиты:
  - `feat: добавил новый компонент Button`
  - `fix: исправил ошибку валидации формы`
  - `docs: обновил README`
  - `style: отформатировал code`
  - `test: добавил тесты для утилит`
  - `chore: обновил зависимости`

### Именование файлов
- **Компоненты:** PascalCase (`Button.tsx`, `FormInput.tsx`)
- **Утилиты/hooks:** camelCase (`useForm.ts`, `cn.ts`)
- **Типы:** PascalCase с суффиксом (`UserType.ts`, `APIResponse.ts`)

### Именование веток
- Feature: `feature/user-auth`, `feature/dark-mode`
- Fix: `fix/login-bug`, `fix/responsive-issue`
- Chore: `chore/update-deps`, `chore/cleanup`

### Code Style
- ESLint конфигурация уже настроена (запусти `npm run lint` перед коммитом)
- React Hooks правила включены (правильный порядок hooks, зависимостей)
- TypeScript strict mode отключен (strictNullChecks: false) — будь осторожнее с null/undefined
- Неиспользуемые переменные не вызывают ошибки (`@typescript-eslint/no-unused-vars: off`)

## 5. Environment Variables

Не требуются обязательные переменные окружения для разработки. 

Если потребуются в будущем:
- `VITE_API_URL` — URL базового API (Vite автоматически подставляет VITE_ префикс)
- `VITE_APP_NAME` — название приложения
- `VITE_THEME` — тема (light/dark)

**[заполни сам]** — если есть специфичные API endpoints или сервисы, добавь их сюда.

## 6. What Claude Should Know

### Важные особенности проекта:
1. **Lovable Framework** — проект создан через Lovable (есть `lovable-tagger` в devDeps). В dev режиме компоненты помечаются для visual builder.

2. **shadcn/ui Компоненты** — компоненты находятся в `src/components/ui/` и импортируются из `@/components/ui`. Это не npm пакеты, а локальные файлы, которые можно кастомизировать.

3. **Tailwind CSS с CSS Variables** — все цвета определены как CSS variables (HSL формат):
   ```css
   --primary: hsl(var(--primary))
   --secondary: hsl(var(--secondary))
   --accent: hsl(var(--accent))
   ```
   Темы (light/dark) переключаются через класс `.dark` на корневом элементе.

4. **Path Aliases** — используется `@/` для импортов:
   - `@/components` → `src/components`
   - `@/lib` → `src/lib`
   - `@/hooks` → `src/hooks`

5. **React Router** — приложение использует React Router для многостраничности:
   ```
   GET / → Index компонент
   GET /* → NotFound компонент
   ```
   Добавляй новые маршруты в `App.tsx` выше catch-all `*` маршрута.

6. **React Query** — используется для управления async state. В примере инициализирован в `App.tsx`, но данный queries ещё не реализованы.

7. **Form Validation** — используется `react-hook-form` + `zod` для валидации форм. Пример синтаксиса:
   ```typescript
   const { register, handleSubmit } = useForm({
     resolver: zodResolver(schema)
   });
   ```

8. **Tests Setup** — Vitest для unit тестов, Playwright для E2E. Fixtures уже подготовлены (`playwright-fixture.ts`).

### Бизнес-правила:
- **[заполни сам]** — какие основные фичи landing должна иметь?
- **[заполни сам]** — целевая аудитория?
- **[заполни сам]** — главное call-to-action?

## 7. Don't — Запрещено

1. **❌ НЕ изменяй структуру `src/components/ui/`** — эти компоненты генерируются shadcn CLI. Если нужен новый компонент из shadcn, запусти `npx shadcn-ui@latest add ComponentName`.

2. **❌ НЕ используй styled-components или CSS-in-JS** — проект использует Tailwind CSS. Добавляй стили только через `className="..."`.

3. **❌ НЕ деплой с `npm run build:dev`** — используй `npm run build` для production. Dev build содержит lovable-tagger и не оптимизирован.

4. **❌ НЕ коммитай `.env.local` файлы** — они в `.gitignore`. Используй `.env.example` для документации.

5. **❌ НЕ добавляй глобальный state в компоненты** без React Query или Context API — это приведет к prop drilling.

6. **❌ НЕ пренебрегай типизацией TypeScript** — аннотируй все параметры компонентов. Даже при `noImplicitAny: false`, это помогает избежать багов.

7. **❌ НЕ забывай про dependencies массив в useEffect/useCallback** — ESLint этого не ловит, но это приведет к багам.

---

**Последнее обновление:** 2026-04-16 17:58:06
**Версия проекта:** 0.0.0