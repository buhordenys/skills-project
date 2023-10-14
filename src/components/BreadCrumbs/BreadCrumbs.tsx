import { Fragment } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import type { IBreadCrumbsProps } from './interfaces/IBreadCrumbs';

function BreadCrumbs({ data }: IBreadCrumbsProps) {
  const { t } = useTranslation('common');

  return (
    <div className="flex items-center mb-4">
      <Link
        href="/"
        className="breadcrumbs-item"
      >
        {t('main')}
      </Link>
      {data[0].url.length !== 0 && <span className="mx-2 block text-xs leading-4">/</span>}
      {data.map(({ url, title, active }) => (
        active ? (
          <Fragment key={`${url}_${title}`}>
            <Link href={`/${url}`} className="breadcrumbs-item" title={title}>
              {title}
            </Link>
            <span className="mx-2 block text-xs leading-4">/</span>
          </Fragment>
        ) : <span className="breadcrumbs-item" key={title}>{title}</span>
      ))}
    </div>
  );
}

export default BreadCrumbs;
