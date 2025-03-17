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

  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://joshwilkerson.github.io/home-widgets"
      : ""

  const prefixedSrc = `${baseURL}${src}`
  const prefixedRetinaSrc = `${baseURL}${retinaSrc}`

  return (
    <img
      src={prefixedSrc}
      alt={alt}
      srcSet={`${prefixedSrc} 1x, ${prefixedRetinaSrc} 2x`}
      style={mergedStyle}
      {...rest}
    />
  )
}
