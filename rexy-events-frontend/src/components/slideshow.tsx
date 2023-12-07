import React, { useState, useEffect } from 'react';

const Slideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const pauseSlideshow = (duration: number) => {
    clearTimeout(slideshowTimeout);
    slideshowTimeout = setTimeout(() => {
      showSlides(slideIndex);
    }, duration);
  };

  const showSlides = (n: number) => {
    let i;
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName('mySlides');
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName('dot');
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    (slides[slideIndex - 1] as HTMLElement).style.display = 'block';
    (dots[slideIndex - 1] as HTMLElement).className += ' active';

    slideshowTimeout = setTimeout(() => {
      plusSlides(1);
    }, 3000);
  };

  let slideshowTimeout: NodeJS.Timeout;

  return (
    <div className="slideshow-container" id="mySlideshow">
      <a className="prev" onClick={() => { plusSlides(-1); pauseSlideshow(3000); }}>
        &#10094;
      </a>
      <a className="next" onClick={() => { plusSlides(1); pauseSlideshow(3000); }}>
        &#10095;
      </a>
    </div>
  );
};

export default Slideshow;
