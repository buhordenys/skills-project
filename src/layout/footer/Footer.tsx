import { useTranslation } from 'next-i18next';

function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="w-full h-20 border-t border-gray-300 flex justify-center items-center hover:text-blue">
      <a
        href="https://github.com/buhordenys"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        {t('poweredBy')}
      </a>
    </footer>

  );
}

export default Footer;
