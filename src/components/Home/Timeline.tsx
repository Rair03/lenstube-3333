import VideoCard from '@components/Common/VideoCard'
import React, { FC } from 'react'
import { LenstubePublication } from 'src/types/local'

type Props = {
  videos: LenstubePublication[]
}

const Timeline: FC<Props> = ({ videos }) => {
  return (
    <div className="grid gap-x-5 lg:grid-cols-4 md:gap-y-8 gap-y-2 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1">
      {videos?.map(
        (video: LenstubePublication, idx: number) =>
          video.__typename === 'Post' &&
          !video.collectedBy && (
            <VideoCard key={`${video?.id}_${idx}`} video={video} />
          )
      )}
    </div>
  )
}

export default Timeline
