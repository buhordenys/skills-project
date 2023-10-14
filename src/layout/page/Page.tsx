import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Loader from '../../components/Loaders/Loader';
import Title from '../../components/Title/Title';
import { STATUS_CODE_RES } from '../../constants/httpStatusCodes';

import type { IPageProps } from './interfaces/IPageProps';

function Page({
  children,
  title,
  breadCrumbs,
  navComponent,
  bottomPanel,
  errorStatus,
  className = '',
  isLoading = false,
  showBread = true,
}: IPageProps) {
  const router = useRouter();
  const { t } = useTranslation(['common', 'error']);

  const createBreadCrumbs = useMemo(() => {
    const pathname = router.asPath.includes('?')
      ? router.asPath.substring(0, router.asPath.indexOf('?'))
      : router.asPath;

    const links = [...pathname.substring(1).split('/')];

    return links.map((item, index) => ({
      url: links.slice(0, index + 1).join('/'),
      title: breadCrumbs?.[item] || t(item),
      active: index !== links.length - 1,
    }));
  }, [breadCrumbs, router, t]);

  return (
    <>
      <Head>
        <title>{title || t('title')}</title>
      </Head>
      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <main>
          {!errorStatus && navComponent}
          {errorStatus ? (
            <div className="page-content">
              <Title>{t(`error:${STATUS_CODE_RES[errorStatus]}`)}</Title>
            </div>
          ) : (
            <div className={`page-content ${className}`}>
              {showBread ? <BreadCrumbs data={createBreadCrumbs} /> : null}
              {children}
            </div>
          )}
          {bottomPanel}
        </main>
      )}
    </>
  );
}

export default Page;
