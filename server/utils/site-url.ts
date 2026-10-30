import type { H3Event } from 'h3'

export function getSiteOrigin(event: H3Event) {
  const config = useRuntimeConfig(event)
  const requestOrigin = getRequestURL(event).origin
  const configuredUrl = String(config.public.siteUrl ?? '').trim()

  if (!configuredUrl) {
    return requestOrigin
  }

  try {
    const url = new URL(configuredUrl)

    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return url.origin
    }
  }
  catch {
    // Fall through to the current request origin.
  }

  return requestOrigin
}
