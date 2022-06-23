import React from 'react';
import Peoplecard from './people/Peoplecard';
import './people.css';

function People() {
    return (
        <div id="people">
            <span>
            <i className="bg fa-solid fa-people-group"></i>
                <h3 id="team">Members of IIC 4.0</h3>
            </span>
            <h2>Faculty Representatives</h2>
            <div id="student-members">
                <Peoplecard type="staff" />
            </div>
            
            <h2 className="mt-5">Expert Representatives</h2>
            <div id="staff-members">
                <Peoplecard type="expertdata" />
            </div>
            <h2 className="mt-5">Student Representatives</h2>
            <div id="staff-members">
                <Peoplecard type="student" />
            </div>
            <span>
            <i className="bg fa-solid fa-people-group"></i>
                <h3 id="team">Ambassadors of IIC 4.0</h3>
            </span>
            
            <div id="staff-members">
                <Peoplecard type="ambassadorsdata" />
            </div>

        </div>
    );
};

export default People;
