import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useCurrency } from '../../../sdk/localization/useCurrency'
import { ProductPageProps } from '../../../templates/product'
import { useStructuredProduct } from './useStructuredProduct'

const StructuredData: FC<ProductPageProps> = ({
  data: {
    vtex: { product },
  },
}) => {
  const [currency] = useCurrency()
  const structuredProduct = useStructuredProduct(product!, currency)

  if (structuredProduct == null) {
    return null
  }

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredProduct) }}
      />
    </Helmet>
  )
}

export default StructuredData
