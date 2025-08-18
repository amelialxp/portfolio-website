interface TagProps {
  children: React.ReactNode
}

export const Tag = ({ children }: TagProps) => {
  const classes = "inline-flex items-center px-3 py-1 rounded-full font-spectral text-sm font-medium text-secondary-gray border border-secondary-gray/20 bg-transparent"

  return (
    <span className={classes}>
      {children}
    </span>
  )
}