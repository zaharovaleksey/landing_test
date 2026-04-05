import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что если мы уже пробовали оптимизировать этот участок?",
    answer:
      "Чаще всего предыдущие попытки буксуют не потому, что идеи были плохие, а потому что не были посчитаны реальные причины потерь. Без этого изменения внедряются «вслепую» и быстро откатываются. Я начинаю с цифр и фактической логики процесса — это другая точка входа.",
  },
  {
    question: "Почему именно 6–8 недель, а не 2 или 6 месяцев?",
    answer:
      "За 2 недели можно только поверхностно посмотреть. За 6 месяцев проект теряет фокус и превращается в процесс ради процесса. 6–8 недель — это достаточно, чтобы разобрать один участок до причин, запустить первые изменения и зафиксировать контур управления.",
  },
  {
    question: "Нужно ли останавливать текущие процессы на время проекта?",
    answer:
      "Нет. Работа идёт параллельно с операциями. Мне нужен доступ к данным, 3–5 интервью с ключевыми участниками и регулярная синхронизация с заказчиком — обычно раз в неделю.",
  },
  {
    question: "Что если у нас нет нормальных данных?",
    answer:
      "Это частая ситуация. Обычно данные есть, но разрозненные — в учётных системах, табличках, головах людей. Часть работы как раз в том, чтобы собрать из этого рабочую картину. Идеальная аналитика для старта не нужна.",
  },
  {
    question: "Чем это отличается от работы с консалтинговой компанией?",
    answer:
      "Большая компания продаёт команду и длинный проект. Я работаю один, фокусируюсь на одном участке и отвечаю за результат лично. Нет раздутых презентаций, нет junior-аналитиков, которые учатся за ваш счёт. Только разбор, цифры и запущенные изменения.",
  },
];

const FAQSection = () => (
  <section className="section-padding border-t border-border">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
          Частые вопросы
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-md px-5 bg-card shadow-card"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-secondary leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
