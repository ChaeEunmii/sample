import 'components/LoadingSample.css';

const LoadingSample = (props) => {
  let {
    size = 132, //원크기
    progress = 0, //가변되는 퍼센트값
    trackWidth = 18,
    trackColor = `#ffffff`,
    indicatorWidth = 10, 
    indicatorColor = `#656668`,
    indicatorCap = `round`,
    labelColor = `#ffffff`, //% 텍스트 컬러
    spinnerMode = false, //spinner 원할경우 spinnerMode
    spinnerSpeed = 1
  } = props

const   center = size / 2,
        //radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth), // 안쪽 여백있도록
        radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth) / 2, //size 딱 맞도록
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - (spinnerMode ? 40 : progress)) / 100) //spinnerMode 일때는 40 영역만큼으로 설정

  let hideLabel = (size < 100  || spinnerMode) ? true : false //원형 로딩 크기가 100px보다 작거나 spinnerMode일때 퍼센트텍스트 숨김

  return (
    <>
      <div className="loading-wrap">
        <div className="dim-bg"></div>{/* 블랙 backdrop 필요 없다면 주석처리 */}
        <div
          className="svg-loading-wrapper"
          style={{ width: size, height: size }}
        >
          {/* 상단 원형 로딩 svg */}
          <svg
            className="svg-loading" 
            style={{ width: size, height: size }}
          >
            <circle
              className="svg-loading-track"
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={trackColor}
              strokeWidth={trackWidth}
            />
            <circle
              className={`svg-loading-indicator ${
                spinnerMode ? "svg-loading-indicator--spinner" : ""
              }`}
              style={{ animationDuration: spinnerSpeed * 1000 }}
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={indicatorColor}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap={indicatorCap}
            />
          </svg>
          {/* 중앙 퍼센트 */}
          {!hideLabel && (
            <>
              <div 
                className="svg-loading-label" 
                style={{ color: labelColor }}
              >
                {!spinnerMode && (
                  <span className="svg-loading-label__progress">
                    {`${
                      progress > 100 ? 100 : progress
                    }%`}
                  </span>
                )}
              </div>
            </>
          )}
          {/* 하단 로딩텍스트 */}
          <span className="svg-loading-bottom-text">
              Loading<span className="circles"><i></i><i></i><i></i></span>
          </span>
        </div>
      </div>
    </>
  )
}

export default LoadingSample;


{/* <LoadingSample progress={'70'}/> */}
{/* <LoadingSample progress={progress}/> */}
{/* <LoadingSample progress={''} spinnerMode/> */}
// const [progress, setProgress] = React.useState(0)
// const loadingDuration = 4000 // 3 seconds

// React.useEffect(() => {
//   let loadingTimeout = setTimeout(() => {
//     setProgress(progress + 1)
//   }, loadingDuration/100)

//   if (progress === 100) {
//     setProgress(0)
//   }

//   return () => {
//     clearTimeout(loadingTimeout)
//   }
// }, [progress])