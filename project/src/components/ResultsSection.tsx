import { motion } from "framer-motion";
import { Eye, Calculator, ListChecks, Settings } from "lucide-react";

const results = [
  {
    icon: Eye,
    title: "Картина потерь",
    text: "Где именно участок теряет деньги, время и пропускную способность.",
  },
  {
    icon: Calculator,
    title: "Структура себестоимости",
    text: "Из каких операций, сценариев и отклонений реально складываются расходы.",
  },
  {
    icon: ListChecks,
    title: "Приоритетные меры",
    text: "Что менять в правилах, ролях, очередях и контроле — в первую очередь.",
  },
  {
    icon: Settings,
    title: "Запущенные изменения",
    text: "Не идеи, а изменения в работе, плюс метрики и ритм контроля, чтобы эффект не откатился.",
  },
];

const ResultsSection = () => (
  <section id="results" className="section-padding bg-surface-warm">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Что вы получаете через 6–8 недель
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Не список рекомендаций, а рабочую картину потерь, приоритетные меры и запущенные изменения.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="bg-card rounded-lg border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-9 h-9 rounded-md bg-accent-soft flex items-center justify-center">
                <r.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{r.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
