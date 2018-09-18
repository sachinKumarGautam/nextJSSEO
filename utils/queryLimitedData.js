import { storage } from '../services/firebase'

function queryLimitedData (saveRecentlyPublishedContent) {
  const newsRef = storage.collection('news')

  newsRef
    .where('is_enabled', '==', true)
    .where('is_published', '==', true)
    .orderBy('created_at', 'desc')
    .limit(3)
    .onSnapshot((querySnapshot) => {
      let payload = []

      querySnapshot.forEach(function (doc) {
        let docObj = doc.data()

        docObj = {
          ...docObj,
          doc_id: doc.id,
          isLoading: false
        }

        payload = [
          ...payload,
          docObj
        ]
      })

      const modifiedPayload = payload.map(item => {
        const body = item.body.split(' ').slice(0, 12).join(' ') + ' ...'

        return {
          ...item,
          body: body
        }
      })

      saveRecentlyPublishedContent(modifiedPayload)
    })
}

export default queryLimitedData
