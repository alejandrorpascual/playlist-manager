// generated with quicktype

export interface EpisodeResponse {
  status: string
  updated: Date
  name: string
  description: string
  description_html: string
  facebook: null
  twitter: string
  website: string
  moods: any[]
  genres: Genre[]
  location_short: string
  location_long: string
  intensity: null
  media: Media
  episode_alias: string
  show_alias: string
  broadcast: Date
  mixcloud: string
  audio_sources: AudioSource[]
  embeds: Embeds
  links: Link[]
}

export interface AudioSource {
  url: string
  source: string
}

export interface Embeds {
  tracklist: Tracklist
}

export interface Tracklist {
  metadata: Metadata
  results: Result[]
  links: Link[]
}

export interface Link {
  rel: string
  href: string
  type: string
}

export interface Metadata {
  resultset: Resultset
}

export interface Resultset {
  count: number
  offset: number
  limit: number
}

export interface Result {
  artist: string
  title: string
}

export interface Genre {
  id: string
  value: string
}

export interface Media {
  background_large: string
  background_medium_large: string
  background_medium: string
  background_small: string
  background_thumb: string
  picture_large: string
  picture_medium_large: string
  picture_medium: string
  picture_small: string
  picture_thumb: string
}
