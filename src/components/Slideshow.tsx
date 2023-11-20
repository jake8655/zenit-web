import { useEffect, useRef } from 'react';
import ReactSwipe from 'react-swipe';

export default function Slideshow() {
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
      idx === 2
        ? swipeElement.current?.slide(0, 500)
        : swipeElement.current?.next();
    } else {
      idx === 0
        ? swipeElement.current?.slide(2, 500)
        : swipeElement.current?.prev();
    }
  };

  return (
    <div className='group bg-primary p-10'>
      <ReactSwipe swipeOptions={{ continuous: false }} ref={swipeElement}>
        <div>PANE 1</div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button
        className='hidden bg-secondary p-4 group-hover:inline-block'
        onClick={() => handleClick(false)}
      >
        Prev
      </button>
      <button
        className='ml-4 hidden bg-secondary p-4 group-hover:inline-block'
        onClick={() => handleClick(true)}
      >
        Next
      </button>
    </div>
  );
}
