import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Фиксируем проблемный участок и baseline",
    text: "Определяем границы, собираем данные и описываем процесс как он реально работает.",
  },
  {
    num: "02",
    title: "Разбираем причины потерь",
    text: "Отделяем ключевые драйверы от шума, считаем, где основной перерасход.",
  },
  {
    num: "03",
    title: "Запускаем изменения",
    text: "Не абстрактные идеи, а меры, которые можно быстро перевести в действие.",
  },
  {
    num: "04",
    title: "Закрепляем метрики и ритм управления",
    text: "Фиксируем логику контроля, чтобы результат не откатился через месяц.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Как устроен проект
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Четыре этапа: зафиксировать, разобрать, изменить, закрепить.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="relative bg-card rounded-lg border border-border p-5 shadow-card"
          >
            <span className="text-2xl font-display font-bold text-accent-soft block mb-3">{step.num}</span>
            <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5 leading-snug">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">{step.text}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2.5 w-1 h-1 rounded-full bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
