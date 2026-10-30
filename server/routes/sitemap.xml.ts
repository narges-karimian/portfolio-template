const renderAlternates = (siteOrigin: string) => [
  `<xhtml:link rel="alternate" hreflang="en" href="${siteOrigin}/" />`,
  `<xhtml:link rel="alternate" hreflang="fa" href="${siteOrigin}/fa" />`,
  `<xhtml:link rel="alternate" hreflang="x-default" href="${siteOrigin}/" />`,
].join('')

const renderUrl = (siteOrigin: string, path: '/' | '/fa') => [
  '<url>',
  `<loc>${siteOrigin}${path}</loc>`,
  renderAlternates(siteOrigin),
  '</url>',
].join('')

export default defineEventHandler((event) => {
  const siteOrigin = getSiteOrigin(event)
  const urls = [renderUrl(siteOrigin, '/'), renderUrl(siteOrigin, '/fa')].join('')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`
})
