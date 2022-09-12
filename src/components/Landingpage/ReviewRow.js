import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ReviewRow() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='review'>
                    <em>
                        The services offered by <strong>Poribar</strong> helped me bring balance to my <br />
                        work and home life. I would give the care of my parents in the <br />
                        hands of the nurses (receiving frequent updates) and remain <br />
                        stress-free, focused on my work.
                    </em>
                    <br />
                    <br />
                    <div>
                        Joshim Doe <br />
                        <strong>Poribar</strong> user
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='review'>
                    <em>
                        <strong>Poribar</strong> brought me closer to my grandparents and their internal<br />
                        affairs (such as mental health and physical health). I do what the <br />
                        nurses recommend me to do, after their sessions, and it feels<br />
                        productive for me, as well as helps me spend more time with my grandparents
                    </em>
                    <br />
                    <br />
                    <div>
                        Ms XYZ <br />
                        <strong>Poribar</strong> user
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ReviewRow
