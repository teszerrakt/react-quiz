import { useEffect, useRef, useState } from 'react'
import {
  btnContainer,
  controlContainer,
  cssVideo,
  progress,
  videoWrapper,
} from './style'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const videoRef = useRef(null)

  const handleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
      setTotalTime(videoRef.current.duration)
    }
  }

  useEffect(() => {
    if (!isPlaying) return

    const updateProgress = () =>
      setInterval(() => {
        if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime)
        }
      }, 1000)

    updateProgress()

    return () => clearInterval(updateProgress)
  }, [isPlaying])

  const handleMute = () => {
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const seekDuration = (event) => {
    videoRef.current.currentTime = +event.target.value
  }

  const formatTime = (time) => {
    let minute = Math.floor(time / 60)
    minute = minute < 10 ? `0${minute}` : minute
    const second = ('0' + Math.floor(time % 60)).slice(-2)
    return minute + ':' + second
  }

  return (
    <div>
      <div className={videoWrapper}>
        <video
          className={cssVideo}
          onClick={handleVideo}
          ref={videoRef}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <div className={controlContainer}>
        <div className={btnContainer}>
          <button type="button" onClick={handleVideo}>
            {isPlaying ? <span>⏸ PAUSE</span> : <span>▶️ PLAY</span>}
          </button>
          <button type="button" onClick={handleMute}>
            {isMuted ? <span>🔈 UNMUTE</span> : <span>🔇 MUTE</span>}
          </button>
        </div>
        <input
          className={progress}
          type="range"
          min={0}
          max={totalTime}
          value={currentTime}
          onChange={seekDuration}
        />
        <span>
          {formatTime(currentTime)}/{formatTime(totalTime)}
        </span>
      </div>
    </div>
  )
}

export default Player
