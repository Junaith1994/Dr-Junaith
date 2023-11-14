import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    console.log(servicesData);
    // Fetching Data
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center'>Services</h1>
            <div className='row row-gap-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;