import { motion } from "framer-motion";
import { Target, BarChart3, Zap } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Фокус на одном участке",
    text: "Задача не расползается на всю компанию — можно быстро добраться до реальных причин.",
  },
  {
    icon: BarChart3,
    title: "Работа от потерь, а не от «лучших практик»",
    text: "Сначала считаем, где теряются деньги и время, потом меняем логику.",
  },
  {
    icon: Zap,
    title: "Изменения — по ходу проекта",
    text: "Проект не заканчивается списком идей: меры переводятся в действие ещё в ходе работы.",
  },
];

const WhyWorksSection = () => (
  <section className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Почему такой формат работает
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Большинство инициатив буксует не потому, что никто не видит проблему, а потому что задача слишком широкая, причины не посчитаны, а изменения не переводятся в действие.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="bg-card rounded-lg border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <card.icon size={18} className="text-primary mb-3" />
            <h3 className="font-display text-[15px] font-semibold text-foreground mb-1.5">{card.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyWorksSection;
