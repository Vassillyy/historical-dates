interface ArrowProps {
  isRight?: boolean
  isSmall?: boolean
  isDisabled?: boolean
}

export const Arrow = ({
  isRight = false,
  isSmall = false,
  isDisabled = false
}: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        transform: isRight ? 'rotate(180deg)' : 'none'
      }}
    >
      <path
        fill="none"
        stroke={
          isSmall
            ? '#3877EE'
            : isDisabled
            ? 'rgba(66, 86, 122, 0.2)'
            : '#42567A'
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 4l-8 8l8 8"
      ></path>
    </svg>
  )
}
