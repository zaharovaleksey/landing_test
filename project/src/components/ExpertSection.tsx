import { motion } from "framer-motion";
import { Truck, PieChart, Gauge } from "lucide-react";

const tags = [
  { icon: Truck, label: "Высоконагруженные полевые операции" },
  { icon: PieChart, label: "Экономика процессов" },
  { icon: Gauge, label: "Метрики и управленческий контур" },
];

const credentials = [
  "До 5 000 полевых операций ежедневно",
  "Бюджет операционных расходов — несколько миллиардов ₽ в год",
  "Сеть городов, распределённые команды",
];

const ExpertSection = () => (
  <section className="section-padding bg-surface-warm">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
            Кто будет разбирать вашу задачу
          </h2>
          <p className="text-base font-medium text-foreground mb-3">
            Алексей Захаров — практикующий эксперт в операционной эффективности.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            Работал с операциями в высоконагруженном бизнесе: до 5 000 полевых операций ежедневно, бюджет расходов несколько миллиардов рублей в год, сеть городов.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Моя сильная сторона — не общий консалтинг и не фасилитация ради красивой картинки.
            Я разбираю операционные потери, нахожу причины и помогаю перевести изменения в управляемый рабочий контур.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, i) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-md px-3.5 py-2.5 shadow-card"
            >
              <tag.icon size={16} className="text-primary shrink-0" />
              <span className="text-[13px] text-foreground">{tag.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="border-l-2 border-primary/20 pl-4 space-y-1.5"
        >
          {credentials.map((c) => (
            <p key={c} className="text-[13px] text-text-secondary">{c}</p>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExpertSection;
