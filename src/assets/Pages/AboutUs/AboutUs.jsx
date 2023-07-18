import React, { useEffect, useState } from 'react';
import Team from './Team';

const AboutUs = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])






    return (
        <div className='mb-10 flex justify-center'>
            <main>
                <div>
                    <h1 className=' text-center font-extrabold text-3xl m-10 text-primary'>MAATS E-commarce Site</h1>
                    <div
                        className='grid grid-cols-2 gap-6'
                    >

                        {
                            members.map(member => <Team
                                key={member.id}
                                member={member}
                            ></Team>)
                        }
                    </div>

                </div>
            </main>

        </div>
    );
};

export default AboutUs;