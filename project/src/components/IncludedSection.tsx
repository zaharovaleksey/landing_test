import { motion } from "framer-motion";

const items = [
  "Разбор текущей логики проблемного участка",
  "Интервью с ключевыми участниками процесса",
  "Анализ данных, отклонений, повторов и простоев",
  "Формирование карты потерь и причин",
  "Запуск первых изменений и фиксация новой логики управления",
];

const IncludedSection = () => (
  <section id="included" className="section-padding bg-surface-warm">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Что входит в проект
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Работа сфокусирована на одном участке и на действиях, которые дают эффект в обозримый срок.
        </p>
      </motion.div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center gap-4 bg-card border border-border rounded-md px-5 py-3.5 shadow-card"
          >
            <span className="shrink-0 w-6 h-6 rounded bg-accent-soft flex items-center justify-center text-[11px] font-semibold text-primary">
              {i + 1}
            </span>
            <p className="text-sm text-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IncludedSection;
