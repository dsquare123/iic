import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import EventCard from './events/EventCard';

import './events.css';

function Event() {
   return (
      <div id="events">
         <span>
         <i className="bg far fa-calendar"></i>
         <p className='event-heading'>Events</p>
         </span>

         <EventCard />
         
      </div>


   );
}

export default Event;
