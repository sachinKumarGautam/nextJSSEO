const apnsAssociations = process.env.NODE_ENV === 'prod' ? 'apple_app_site_association_prod.json' : 'apple_app_site_association_dev.json'
const androidVerifiedAppLinks = process.env.NODE_ENV === 'prod' ? 'android_verified_app_links_prod.json' : 'android_verified_app_links_dev.json'

module.exports = {
    apnsAssociations,
    androidVerifiedAppLinks
}
