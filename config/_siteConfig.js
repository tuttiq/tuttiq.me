/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'tuttiq.me',
  url: 'https://tuttiq.me',
  tagLine: 'Tech | Leadership | Career | D&I',
  description:
    "Tutti Quintella's personal website (tuttiq's blog). Stories of a software engineer turned into engineering manager, community leader and D&I advocate (for women and underrepresented folks in tech).",
  featureImage: '/uploads/banner.png',
  logo: '/logo.png', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: false
    // id: process.env.GOOGLE_ANALYTICS_ID
  },
  mainMenu: [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Content',
      link: '/categories'
    },
    {
      name: 'Projects & Organizations',
      link: '/projects'
    },
    {
      name: 'About me',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ],
  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '2x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: false,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'blog-danielkelly-io' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Subscribe to my newsletter',
    btnText: 'Subscribe',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://tuttiq.us4.list-manage.com/subscribe/post?u=ba1f2c8286029a5ed8e3621dd&amp;id=182213881f'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Categories
  categories: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for categories if set here)
    theme: null // See card.theme (can be unique for categories if set here)
  },

  // Tags
  tags: {
    on: true,
    perPage: 6,
    imageDimensions: null, // See card.imageDimensions (can be unique for tags if set here)
    theme: null // See card.theme (can be unique for tags if set here)
  },

  // Posts
  posts: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    displayAuthor: true,
    date: {
      display: true
    },
    perRow: 3,
    perPage: 6
  }
}

export const CMS = theCMS
