import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import React from 'react'
import {EpisodeResponse} from '../types/responses/EpisodeResponse'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Nts({data}: Props) {
  return (
    <ul>
      {data.embeds.tracklist.results.map(item => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <h4>{item.artist}</h4>
        </li>
      ))}
    </ul>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://www.nts.live/api/v2/shows/panorama-heaven/episodes/panorama-heaven-6th-october-2021',
  )

  if (res.ok) {
    const data: EpisodeResponse = await res.json()

    return {props: {data}}
  }

  throw new Error('error')
}
