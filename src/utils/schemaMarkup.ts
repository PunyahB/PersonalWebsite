import { AppConfig } from './AppConfig';

export const schemaMarkup = {
  '@context': 'https://schema.org/',
  '@type': 'Person',
  name: AppConfig.site_name,
  alternateName: 'Punyah Baghla',
  url: AppConfig.site_url,
  image: `${AppConfig.site_url}/profile-pic.png`,
  sameAs: [
    'https://twitter.com/iamrockstar211',
    'https://github.com/PunyahB',
    'https://www.linkedin.com/in/punyah-baghla-2b9ab3289/',
  ],
};
