import React, { useState } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { CORPORATE_RED } from '../constants';

interface GalleryProps {
  images: { src: string; alt: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <section id="gallery" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-wide text-gray-900">Momentos Smile</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Capturando la alegría de un buen hot dog.</p>
        </div>

        <div className="max-w-4xl mx-auto h-[50vh] md:h-[65vh] w-full relative group">
          <div
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-in-out shadow-2xl"
          ></div>
          
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer transition-opacity duration-300">
            <ChevronLeftIcon onClick={prevSlide} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer transition-opacity duration-300">
            <ChevronRightIcon onClick={nextSlide} />
          </div>

          <div className="flex top-4 justify-center py-2 absolute bottom-5 left-1/2 -translate-x-1/2">
            {images.map((_, slideIndex) => (
                <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    aria-label={`Ir a la imagen ${slideIndex + 1}`}
                >
                </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;