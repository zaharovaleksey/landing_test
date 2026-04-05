import { motion } from "framer-motion";
import { TrendingUp, Clock, RefreshCw, Hand } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Себестоимость растёт, а причины расплываются",
    text: "«У нас расходы на обслуживание выросли на 18% за год. Финдиректор спрашивает почему — а мы не можем нормально объяснить». — Дмитрий, COO сервисной компании, 1 200 заявок в день.",
  },
  {
    icon: Clock,
    title: "Простой есть, но он размазан по системе",
    text: "«Бригады ждут запчасти, запчасти ждут заявку, заявка ждёт согласование. Каждый кусок — вроде норма, а в сумме теряем 30% времени». — Сергей, директор по эксплуатации, сеть из 40 городов.",
  },
  {
    icon: RefreshCw,
    title: "Слишком много повторных действий",
    text: "«Каждый пятый выезд — повторный. Формально всё по процессу, но клиент недоволен и мы платим дважды». — Марина, руководитель операций, федеральный оператор.",
  },
  {
    icon: Hand,
    title: "Операции держатся на ручном управлении",
    text: "«Пока наш лучший диспетчер в отпуске — всё разваливается. Система работает только потому, что Ольга всё помнит и всех дёргает вручную». — Андрей, собственник, 800+ сотрудников в полях.",
  },
];

const ForWhomSection = () => (
  <section id="for-whom" className="section-padding border-t border-border">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-2xl"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Когда этот проект нужен
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Обычно ко мне приходят, когда есть один болезненный участок, где растут затраты, копится простой и всё держится на ручном управлении.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="group bg-card rounded-lg border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-9 h-9 rounded-md bg-accent-soft flex items-center justify-center">
                <card.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1.5">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{card.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-[13px] text-text-tertiary"
      >
        Если хотя бы один сценарий узнаётся — задачу пора разбирать предметно.
      </motion.p>
    </div>
  </section>
);

export default ForWhomSection;
