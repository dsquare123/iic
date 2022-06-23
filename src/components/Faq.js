import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import Announcements from './events/Announcements';
import './events.css';

function Faq() {
   return (
      <div id="events">
         <span className='mb-2'>
         <i className="bg fas fa-stream"></i>
            <p className='event-heading'>FAQ's</p>
         </span>

         <Announcements />
      </div>


   );
}

export default Faq;
