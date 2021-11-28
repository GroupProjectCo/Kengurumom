import './ProdGallery.css';
import { useState } from 'react';
import ThumbnailImage from './ThumbnailImage/ThumbnailImage';
import ZoomContainer from './ZoomContainer/ZoomContainer';

function ProdGallery({ photos, media }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const getImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="product-gallery">
      <ZoomContainer slides={photos} currentThumb={currentImageIndex} media={media} />
      <ul className="thumbnails">
        {photos.map((image, i) => (
          <ThumbnailImage src={image.url} key={i} getImage={getImage} index={i} />
        ))}
      </ul>
    </section>
  );
}

export default ProdGallery;
