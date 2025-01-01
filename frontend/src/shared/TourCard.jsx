import React from 'react';
import {Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import './tour-card.css';
import claculateAvgRating from '../utils/avgRating';

const TourCard = ({activite}) => {
      




  return (
  
        <div  className="relative rounded-md pb-4 group">
          <div className="h-80 overflow-hidden rounded-xl">
              <img
                src={activite?.images[0]?.src}
                className="w-full bg-white/0 h-full object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-110"
                width={500}
                height={500}
                alt={activite?.name}
                title={activite?.name}
              />
          </div>
          <div className="flex flex-col gap-2 absolute p-2 h-80 left-0 w-full inset-0 bg-black/50 rounded-xl items-center justify-center">
            <h2 className="text-white font-bold text-2xl capitalize text-center">{activite.name}</h2>
          </div>
          <p className="absolute bg-[#ff7e01] rounded-b-xl w-full p-2 text-white font-semibold text-base capitalize text-center bottom-1">
            {activite.categories?.find((attr) => [353, 352, 351, 355, 354].includes(attr.id))?.name}
          </p>
        </div>
  )
}

export default TourCard

