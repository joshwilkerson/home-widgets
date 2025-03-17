import React from "react"

interface DisplayImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  size?: `${number}px`
}

export const DisplayImage = ({
  src,
  alt,
  size,
  style,
  ...rest
}: DisplayImageProps) => {
  const retinaSrc = src.replace(/(\.[^.]+)$/, "@2x$1")

  const mergedStyle = {
    ...(size ? { width: size, height: size } : {}),
    ...style,
  }

  return (
    <img
      src={src}
      alt={alt}
      srcSet={`${src} 1x, ${retinaSrc} 2x`}
      style={mergedStyle}
      {...rest}
    />
  )
}
