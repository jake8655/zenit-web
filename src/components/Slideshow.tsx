import type { InferSelectModel } from 'drizzle-orm';
import { useEffect, useRef } from 'react';
import ReactSwipe from 'react-swipe';

import type { pricelist } from '~/db/schema';

interface Pricelist
  extends Omit<InferSelectModel<typeof pricelist>, 'benefits'> {
  benefits: string[];
}

export default function Slideshow({ prices }: { prices: Pricelist[][] }) {
  const swipeElement = useRef<ReactSwipe>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleClick(true);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (next: boolean) => {
    const idx = swipeElement.current?.getPos();
    if (next) {
      idx === (swipeElement.current?.getNumSlides() ?? 0) - 1
        ? swipeElement.current?.slide(0, 500)
        : swipeElement.current?.next();
    } else {
      idx === 0
        ? swipeElement.current?.slide(
            swipeElement.current.getNumSlides() - 1,
            500,
          )
        : swipeElement.current?.prev();
    }
  };

  return (
    <div className='group relative'>
      <ReactSwipe swipeOptions={{ continuous: false }} ref={swipeElement}>
        {prices.map((priceGroup, idx) => (
          <div key={idx} className='grid grid-cols-4 gap-10'>
            {priceGroup.map(price => (
              <PriceCard
                key={price.id}
                price={price.price}
                title={price.title}
                image={price.imagePath}
                benefits={price.benefits}
                className={
                  priceGroup.length === 1
                    ? 'col-start-2 col-end-4'
                    : 'col-span-2'
                }
              />
            ))}
          </div>
        ))}
      </ReactSwipe>
      <button
        className='absolute -left-[20px] top-[50%] hidden h-10 w-10 -translate-y-[50%] cursor-pointer items-center justify-center bg-primary p-4 text-white hover:bg-third hover:text-black group-hover:flex'
        onClick={() => handleClick(false)}
      >
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
      <button
        className='absolute -right-[20px] top-[50%] hidden h-10 w-10 -translate-y-[50%] cursor-pointer items-center justify-center bg-primary p-4 text-white hover:bg-third hover:text-black group-hover:flex'
        onClick={() => handleClick(true)}
      >
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  );
}

function PriceCard({
  price,
  title,
  image,
  benefits,
  className = '',
}: {
  price: number;
  title: string;
  image: string;
  benefits: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <img src={image} alt={title} />
      <div className='relative flex flex-col items-center bg-banner'>
        <p className='absolute left-[50%] top-[-20px] -translate-x-[50%] bg-banner p-1 text-2xl font-semibold text-primary'>
          {price}
        </p>
        <h4 className='relative pb-1 pt-6 text-2xl font-semibold text-secondary before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-[80%] before:-translate-x-[50%] before:bg-secondary-light/30 before:content-[""]'>
          {title}
        </h4>
        <div className='relative flex w-full flex-col gap-2 border-b border-primary p-4 pb-16'>
          {benefits.map((benefit, idx) => (
            <p
              className='text-md flex items-center text-secondary-light'
              key={idx}
            >
              {benefit}
              <i className='fa fa-check ml-auto text-primary'></i>
            </p>
          ))}
          <button className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-third hover:text-black'>
            Objednajte sa
          </button>
        </div>
      </div>
    </div>
  );
}
