import { useTranslation } from '@pancakeswap/localization'
import { FC, useCallback } from 'react'

import CurrencyInputHeader from '../../components/CurrencyInputHeader'

export const FormHeader: FC<{ refreshDisabled: boolean; onRefresh: () => void }> = ({ refreshDisabled, onRefresh }) => {
  const { t } = useTranslation()

  const handleRefresh = useCallback(() => {
    if (refreshDisabled) {
      return
    }
    onRefresh()
  }, [onRefresh, refreshDisabled])

  return (
    <CurrencyInputHeader
      title={t('Thicc Dumper')}
      subtitle={t('Swap any token at the worst rates...')}
      hasAmount={!refreshDisabled}
      onRefreshPrice={handleRefresh}
    />
  )
}
