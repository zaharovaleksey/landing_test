import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", company: "", problem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-2xl md:text-[1.75rem] font-semibold text-foreground mb-3">
              Обсудим ваш проблемный участок
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Если есть участок, где растут затраты, много простоя или ручного хаоса — на первой встрече определим, подходит ли задача под формат спринта.
            </p>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent-medium shrink-0" />
                <span>30 минут, без обязательств</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent-medium shrink-0" />
                <span>Быстро определим, есть ли задача</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-accent-medium shrink-0" />
                <span>Покажу, где искать основной эффект</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-card rounded-lg border border-border p-6 shadow-card text-center">
                <p className="text-base font-display font-semibold text-foreground mb-1.5">
                  Заявка отправлена
                </p>
                <p className="text-sm text-text-secondary">
                  Свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-5 md:p-6 shadow-card space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-1">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-1">Компания и роль</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-foreground mb-1">Кратко опишите проблемный участок</label>
                  <textarea
                    required
                    rows={3}
                    value={form.problem}
                    onChange={(e) => setForm({ ...form, problem: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-sm"
                >
                  Обсудить задачу
                  <ArrowRight size={15} />
                </button>
                <p className="text-[12px] text-text-tertiary leading-relaxed">
                  Первая встреча — чтобы понять, есть ли здесь задача для спринта и где основной эффект.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
