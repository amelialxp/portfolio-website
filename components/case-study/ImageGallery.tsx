interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  layout?: 'single' | 'side-by-side' | 'grid'
}

export const ImageGallery = ({ images, layout = 'single' }: ImageGalleryProps) => {
  const getGridClass = () => {
    switch (layout) {
      case 'side-by-side':
        return 'grid md:grid-cols-2 gap-8'
      case 'grid':
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
      default:
        return 'space-y-8'
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className={getGridClass()}>
          {images.map((image, index) => (
            <div key={index} className="space-y-4">
              <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500 px-4">
                  <div className="text-base text-text-body mb-2">Image {index + 1}</div>
                  <div className="text-xs mb-1">{image.src}</div>
                  <div className="text-xs italic">{image.alt}</div>
                </div>
              </div>
              {image.caption && (
                <p className="text-sm text-gray-500 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}