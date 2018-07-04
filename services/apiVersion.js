const getApiServiceVersion = (apiServiceType) => {
  switch (apiServiceType) {
    case 'order':
      return 'v6'

    case 'cart':
      return 'v5'

    case 'catalog':
      return 'v6'

    case 'account':
      return 'v5'

    case 'wallet':
      return 'v1'

    default:
      return 'v1'
  }
}

export default getApiServiceVersion
