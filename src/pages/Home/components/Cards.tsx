import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { technologies } from '../../../constants/mocks';

function Cards() {
  const { t } = useTranslation('home');

  return (
    <div className="flex items-center justify-center max-w-70p mt-12">
      {technologies.map((item, index) => (
        <Link
          key={[item.tKey, index].join()}
          href={item.href}
          className={`card ${item.isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <h3>
            {t(`${item.tKey}`)}
              &nbsp;&rarr;
          </h3>
          <p>{t(`${item.tKey}Information`)}</p>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
