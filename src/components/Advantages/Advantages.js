import { useState, useEffect } from 'react';
import './Advantages.css';
import AdvantageElement from '../AdvantageElement/AdvantageElement';
import { advantagesData } from './texts';

function Advantages() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(advantagesData);
  }, []);

  return (
    <section className="advantages">
      <ul className="advantages__cards">
        {elements.map((element, i) => (
          <AdvantageElement
            image={element.image}
            alt={element.alt}
            title={element.title}
            description={element.description}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
}

export default Advantages;
