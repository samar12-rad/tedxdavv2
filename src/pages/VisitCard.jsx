import React, { useState } from 'react';
import './visitcard.css'; // Import the CSS file

function VisitCard() {
  const [currentCard, setCurrentCard] = useState(0);
  const cardContents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in eu lacus. Aliquam tempus odio adipiscing diam pellentesque rhoncus. Curabitur a bibendum est. Mauris vehicula cursus risus id luctus. Curabitur accumsan venenatis nibh, non egestas ipsum vulputate ac. Vivamus consectetur dolor sit amet enim aliquet eu scelerisque ipsum hendrerit. Donec lobortis suscipit vestibulum. Nullam luctus pellentesque risus in ullamcorper. Nam neque nunc, mattis vitae ornare ut, feugiat a erat. Ut tempus iaculis augue vel pellentesque.",
    "Vestibulum nunc massa, gravida quis porta nec, feugiat id metus. Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis ipsum, non rhoncus lectus aliquam et. Morbi faucibus purus sit amet lacus aliquet elementum. Donec sit amet posuere enim. Cras in eros id tortor fringilla ultricies. Mauris faucibus ullamcorper velit, pulvinar varius odio eleifend eu. Quisque id odio metus. Morbi adipiscing ultricies posuere. Pellentesque elementum porttitor eros in molestie. Maecenas ut leo quis nisi tempor tincidunt.",
    "Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus facilisis ultricies eros, a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim. Nulla eros nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla.",
    "Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit. Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio. In elit urna, tincidunt a pellentesque et, scelerisque at nibh. Sed nec est sapien. Aliquam ullamcorper eros eu quam ultrices vel faucibus eros interdum. Etiam mattis eleifend sapien, eu iaculis massa feugiat sed. Aliquam erat volutpat. Vivamus facilisis ultricies eros, a pretium purus mollis id. Sed dapibus elit ut neque rutrum dignissim. Nulla eros nisl, venenatis quis rhoncus sit amet, molestie nec nisl. Pellentesque vel neque sapien, et sagittis nulla."
  ];

  const handleClick = (index) => {
    setCurrentCard((current) => (current === index ? (index + 1) % cardContents.length : index));
  };

  return (
    <div className='visitcontainer'>
    <ul className="cards cards--active">
      {cardContents.map((content, index) => (
        <li
          key={index}
          className={`card ${currentCard === index ? 'card--current' : ''} ${currentCard === index - 1 || (currentCard === 3 && index === 0) ? 'card--out' : ''} ${currentCard === index + 1 || (currentCard === 0 && index === 3) ? 'card--next' : ''}`}
          onClick={() => handleClick(index)}
        >
          <h1>Comment Card {index + 1}</h1>
          <p>{content}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default VisitCard;
