import { getElementError } from '@testing-library/react';
import BasicCarousel from './Carousel/Carousel';
import AdvancedCarousel from './Carousel/CarouselControls';
import { useState } from 'react';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      react exaple
      <AdvancedCarousel isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      {isModalOpen && <div>ModalWindow</div>}
    </div>
  );
};
