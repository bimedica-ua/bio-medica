'use client';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFromApi } from '../../apiGetter';
import { CONSTANTS } from '@/constants';
const { ImageSliderApi: storyBlockApi } = CONSTANTS;

function ImageSlider() {
  let [imagesForSlider, setImagesForSlider] = useState({ Photos: [] });

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const customSlider = useRef();

  useEffect(() => {
    getFromApi(storyBlockApi, setImagesForSlider);
  }, []);

  return (
    <>
      {imagesForSlider.Photos && (
        <section className="mb-10 xl:mt-10 max-w-[1200px] mx-auto relative">
          {imagesForSlider.Photos.length > 0 && (
            <Slider
              {...settings}
              ref={(slider: any) => (customSlider.current = slider)}
            >
              {imagesForSlider.Photos?.map(
                ({ id, filename }: { id: number; filename: string }) => (
                  <div key={id}>
                    <div
                      className="rounded-md bg-contain xl:bg-cover bg-clip-padding bg-center min-h-[65vw] ssm:min-h-[60vw] xl:min-h-[670px] bg-no-repeat xl:py-10"
                      style={{ backgroundImage: `url(${filename})` }}
                    ></div>
                  </div>
                )
              )}
            </Slider>
          )}
          {imagesForSlider.Photos.length <= 0 && (
            <div className="rounded-lg min-h-[65vw] ssm:min-h-[60vw] xl:min-h-[670px] flex justify-center items-center xl:py-10 border-cardSecondColor border-2 text-cardSecondColor font-bold text-[32px]">
              Завантаження...
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default ImageSlider;
