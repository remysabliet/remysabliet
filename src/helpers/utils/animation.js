export const statisticLogs = (elapsedTime, currentFps) =>
      console.log(`Elapsed time=  ${elapsedTime} secs @ ${currentFps} fps.`)

export const elapsedTime = sinceStart => Math.round((sinceStart / 1000) * 100) / 100

// Review currentFps
export const currentFps = (sinceStart, framecount) =>
      Math.round(((1000 / (sinceStart / ++this.frameCount)) * 100) / 100)