import { View, Text, Video } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <Video
      src={'https://smart-image.alisports.com/basketball-court/AIBasketball/clip_video/huilongguan_1_2/2024-08-10/1723276265640.mp4'}
      autoplay
      custom-cache={false}
      nativeProps={{
        'custom-cache': false,
      }}
    />
  )
}
