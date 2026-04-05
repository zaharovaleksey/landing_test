import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const markers = [
  "Фокус на одном участке, а не на всей компании",
  "Изменения запускаются по ходу проекта",
  "На выходе — рабочая логика управления, а не презентация",
];

const stats = [
  { value: "6–8", unit: "недель", label: "длительность" },
  { value: "1", unit: "участок", label: "в фокусе" },
  { value: "4", unit: "результата", label: "на выходе" },
];

const flowSteps = ["Потери", "Причины", "Изменения", "Управление"];

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-14 md:pt-28 md:pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-[13px] font-medium text-text-tertiary uppercase tracking-widest mb-4"
            >
              Операционный консалтинг
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-[2.5rem] leading-[1.15] font-semibold text-foreground mb-5"
            >
              Нахожу, где операции теряют деньги, и запускаю изменения за 6–8 недель
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-base text-text-secondary leading-relaxed mb-3 max-w-xl"
            >
              Разбираю один проблемный участок: считаю потери, нахожу причины и перестраиваю логику работы так, чтобы расходы, простой и переделки сокращались.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-sm text-text-tertiary leading-relaxed mb-7 max-w-xl"
            >
              Это не аудит ради отчёта и не трансформация «всего сразу». Короткий проект с фокусом на участке, где уже назрел пересмотр.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="space-y-2 mb-8"
            >
              {markers.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-medium shrink-0" />
                  {m}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#cta")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                Обсудить задачу
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("#for-whom")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors text-sm"
              >
                Типовые ситуации
                <ChevronRight size={15} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-2 hidden md:block"
          >
            <div className="bg-card rounded-lg border border-border p-5 shadow-card">
              <p className="text-[11px] font-medium text-text-tertiary uppercase tracking-widest mb-4">
                Логика проекта
              </p>
              <div className="space-y-0">
                {flowSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-md bg-accent-soft flex items-center justify-center text-xs font-semibold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < flowSteps.length - 1 && (
                        <div className="w-px h-5 bg-border" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex gap-8 md:gap-12 max-w-lg"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-xl md:text-2xl font-display font-semibold text-primary leading-none">
                {s.value}
                <span className="text-sm font-sans font-normal text-text-secondary ml-1">{s.unit}</span>
              </p>
              <p className="text-[11px] text-text-tertiary mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
