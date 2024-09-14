import './PropertyListing.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get(
                    "https://mocki.io/v1/699d1220-1528-4ebb-8a1e-e2ee31a50c40"
                );
                setProperties(response.data); // Assuming response.data contains an array of properties
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const handleClick = (href) => {
        window.location.href = href;
    }

    if (loading) return <div style={{ color: 'white' }}>Loading...</div>;
    if (error) return <div style={{ color: 'white' }} >{error}</div>;

    return (
        <div className='PropertyListing'>
            <h1>Property Listing</h1>
            <ul className='Listing'>
                {properties.map((property, index) => (
                    <li key={index} onClick={() => handleClick(property.detailUrl)}>
                        <img src={property.imgSrc} alt="" />
                        <h2>{property.name}</h2>
                        <p>Price: {property.price ? property.price : "Not fixed"}</p>
                        <p>Location: {property.address}</p>
                        <h5>Status: {property.statusText}</h5>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyListing;
