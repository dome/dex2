/* eslint-disable no-nested-ternary */
import { useTranslation } from '@pancakeswap/localization'
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  NextLinkFromReactRouter,
  Spinner,
  Text,
  Link as UIKitLink,
  useMatchBreakpoints,
  ScanLink,
} from '@pancakeswap/uikit'
import useInfoUserSavedTokensAndPools from 'hooks/useInfoUserSavedTokensAndPoolsList'
import { NextSeo } from 'next-seo'

import truncateHash from '@pancakeswap/utils/truncateHash'
import Page from 'components/Layout/Page'
import { CHAIN_QUERY_NAME } from 'config/chains'
import { ONE_HOUR_SECONDS } from 'config/constants/info'
import { Duration } from 'date-fns'
import { useMemo } from 'react'
import { multiChainId, multiChainScan, subgraphTokenSymbol } from 'state/info/constant'
import {
  useChainIdByQuery,
  useChainNameByQuery,
  useMultiChainPath,
  usePoolDatasSWR,
  usePoolsForTokenSWR,
  useStableSwapPath,
  useTokenChartDataSWR,
  useTokenDataSWR,
  useTokenPriceDataSWR,
  useTokenTransactionsSWR,
} from 'state/info/hooks'
import { styled } from 'styled-components'
import { getBlockExploreLink } from 'utils'
import { formatAmount } from 'utils/formatInfoNumbers'
import { CurrencyLogo } from 'views/Info/components/CurrencyLogo'
import ChartCard from 'views/Info/components/InfoCharts/ChartCard'
import PoolTable from 'views/Info/components/InfoTables/PoolsTable'
import TransactionTable from 'views/Info/components/InfoTables/TransactionsTable'
import Percent from 'views/Info/components/Percent'
import SaveIcon from 'views/Info/components/SaveIcon'
import useCMCLink from 'views/Info/hooks/useCMCLink'

const ContentLayout = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-gap: 1em;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const StyledCMCLink = styled(UIKitLink)`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  &:hover {
    opacity: 0.8;
  }
`
const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }

const TokenPage: React.FC<React.PropsWithChildren<{ routeAddress: string }>> = ({ routeAddress }) => {
  const { isXs, isSm } = useMatchBreakpoints()
  const { t } = useTranslation()
  const chainId = useChainIdByQuery()
  const { savedTokens, addToken } = useInfoUserSavedTokensAndPools(chainId)

  // In case somebody pastes checksummed address into url (since GraphQL expects lowercase address)
  const address = routeAddress.toLowerCase()

  const cmcLink = useCMCLink(address)

  const tokenData = useTokenDataSWR(address)
  const poolsForToken = usePoolsForTokenSWR(address)
  const poolDatas = usePoolDatasSWR(useMemo(() => poolsForToken ?? [], [poolsForToken]))
  const transactions = useTokenTransactionsSWR(address)
  const chartData = useTokenChartDataSWR(address)

  // pricing data
  const priceData = useTokenPriceDataSWR(address, ONE_HOUR_SECONDS, DEFAULT_TIME_WINDOW)
  const adjustedPriceData = useMemo(() => {
    // Include latest available price
    if (priceData && tokenData && priceData.length > 0) {
      return [
        ...priceData,
        {
          time: Date.now() / 1000,
          open: priceData[priceData.length - 1].close,
          close: tokenData?.priceUSD,
          high: tokenData?.priceUSD,
          low: priceData[priceData.length - 1].close,
        },
      ]
    }
    return undefined
  }, [priceData, tokenData])

  const chainPath = useMultiChainPath()
  const chainName = useChainNameByQuery()
  const infoTypeParam = useStableSwapPath()

  return (
    <Page>
      <NextSeo title={tokenData?.symbol} />
      {tokenData ? (
        !tokenData.exists ? (
          <Card>
            <Box p="16px">
              <Text>
                {t('No pair has been created with this token yet. Create one')}
                <NextLinkFromReactRouter style={{ display: 'inline', marginLeft: '6px' }} to={`/add/${address}`}>
                  {t('here.')}
                </NextLinkFromReactRouter>
              </Text>
            </Box>
          </Card>
        ) : (
          <>
            {/* Stuff on top */}
            <Flex justifyContent="space-between" mb="24px" flexDirection={['column', 'column', 'row']}>
              <Breadcrumbs mb="32px">
                <NextLinkFromReactRouter to={`/info${chainPath}${infoTypeParam}`}>
                  <Text color="primary">{t('Info')}</Text>
                </NextLinkFromReactRouter>
                <NextLinkFromReactRouter to={`/info${chainPath}/tokens${infoTypeParam}`}>
                  <Text color="primary">{t('Tokens')}</Text>
                </NextLinkFromReactRouter>
                <Flex>
                  <Text mr="8px">{tokenData.symbol}</Text>
                  <Text>{`(${truncateHash(address)})`}</Text>
                </Flex>
              </Breadcrumbs>
              <Flex justifyContent={[null, null, 'flex-end']} mt={['8px', '8px', 0]}>
                <ScanLink
                  mr="8px"
                  color="primary"
                  chainId={multiChainId[chainName]}
                  href={getBlockExploreLink(address, 'address', multiChainId[chainName])}
                >
                  {t('View on %site%', { site: multiChainScan[chainName] })}
                </ScanLink>
                {cmcLink && (
                  <StyledCMCLink href={cmcLink} rel="noopener noreferrer nofollow" target="_blank">
                    <Image src="/images/CMC-logo.svg" height={22} width={22} alt={t('View token on CoinMarketCap')} />
                  </StyledCMCLink>
                )}
                <SaveIcon fill={savedTokens.includes(address)} onClick={() => addToken(address)} />
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" flexDirection={['column', 'column', 'column', 'row']}>
              <Flex flexDirection="column" mb={['8px', null]}>
                <Flex alignItems="center">
                  <CurrencyLogo size="32px" address={address} chainName={chainName} />
                  <Text
                    ml="12px"
                    bold
                    lineHeight="0.7"
                    fontSize={isXs || isSm ? '24px' : '40px'}
                    id="info-token-name-title"
                  >
                    {tokenData.name}
                  </Text>
                  <Text ml="12px" lineHeight="1" color="textSubtle" fontSize={isXs || isSm ? '14px' : '20px'}>
                    ({subgraphTokenSymbol[tokenData.address] ?? tokenData.symbol})
                  </Text>
                </Flex>
                <Flex mt="8px" ml="46px" alignItems="center">
                  <Text mr="16px" bold fontSize="24px">
                    ${formatAmount(tokenData.priceUSD, { notation: 'standard' })}
                  </Text>
                  <Percent value={tokenData.priceUSDChange} fontWeight={600} />
                </Flex>
              </Flex>
              <Flex>
                <NextLinkFromReactRouter to={`/add/${address}?chain=mezo`}>
                  <Button mr="8px" variant="secondary">
                    {t('Add Liquidity')}
                  </Button>
                </NextLinkFromReactRouter>
                <NextLinkFromReactRouter to={`/swap?outputCurrency=${address}&chainId=31611`}>
                  <Button>{t('Trade')}</Button>
                </NextLinkFromReactRouter>
              </Flex>
            </Flex>

            {/* data on the right side of chart */}
            <ContentLayout>
              <Card>
                <Box p="24px">
                  <Text bold small color="secondary" fontSize="12px" textTransform="uppercase">
                    {t('Liquidity')}
                  </Text>
                  <Text bold fontSize="24px">
                    ${formatAmount(tokenData.liquidityUSD)}
                  </Text>
                  <Percent value={tokenData.liquidityUSDChange} />

                  <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
                    {t('Volume 24H')}
                  </Text>
                  <Text bold fontSize="24px" textTransform="uppercase">
                    ${formatAmount(tokenData.volumeUSD)}
                  </Text>
                  <Percent value={tokenData.volumeUSDChange} />

                  <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
                    {t('Volume 7D')}
                  </Text>
                  <Text bold fontSize="24px">
                    ${formatAmount(tokenData.volumeUSDWeek)}
                  </Text>

                  <Text mt="24px" bold color="secondary" fontSize="12px" textTransform="uppercase">
                    {t('Transactions 24H')}
                  </Text>
                  <Text bold fontSize="24px">
                    {formatAmount(tokenData.txCount, { isInteger: true })}
                  </Text>
                </Box>
              </Card>
              {/* charts card */}
              <ChartCard
                variant="token"
                chartData={chartData}
                tokenData={tokenData}
                tokenPriceData={adjustedPriceData}
              />
            </ContentLayout>

            {/* pools and transaction tables */}
            <Heading scale="lg" mb="16px" mt="40px">
              {t('Pairs')}
            </Heading>

            <PoolTable poolDatas={poolDatas} />

            <Heading scale="lg" mb="16px" mt="40px">
              {t('Transactions')}
            </Heading>

            <TransactionTable transactions={transactions} />
          </>
        )
      ) : (
        <Flex mt="80px" justifyContent="center">
          <Spinner />
        </Flex>
      )}
    </Page>
  )
}

export default TokenPage
