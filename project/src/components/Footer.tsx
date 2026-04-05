const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
      <p className="text-[13px] text-text-secondary">
        Алексей Захаров — операционная эффективность
      </p>
      <div className="flex flex-wrap items-center gap-4 text-[13px] text-text-tertiary">
        <span>[email]</span>
        <span>[telegram]</span>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  </footer>
);

export default Footer;
