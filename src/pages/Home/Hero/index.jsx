import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import combi from '../../../assets/fashiondesigner.jpg';
import pic from './../../../assets/hairstylist.jpg';
import pic1 from '../../../assets/Skill.png';
import pic2 from '../../../assets/barber.jpg';
import pic3 from '../../../assets/plumb1.jpeg';
import style from './index.module.css';
import { Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Search for a location
    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            try {
                const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&limit=5`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching the location:', error);
            }
        }
    };

    // Update the map when a search result is clicked
    const handleLocationClick = (lat, lon, displayName) => {
        if (mapRef.current) {
            mapRef.current.setView([lat, lon], 13); // Center the map at the new location
            L.marker([lat, lon]).addTo(mapRef.current).bindPopup(`Selected Location: ${displayName}`).openPopup();
        }
    };

    const navigate = useNavigate();
    const mapRef = useRef(null); // Use a ref to store the map instance

    useEffect(() => {
        if (!mapRef.current) {
            const mapInstance = L.map('map').setView([39.75621, -104.99404], 13); // Initialize the map
            mapRef.current = mapInstance;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance);

            // Handle user's current location
            mapInstance.locate({ setView: true, maxZoom: 16 });

            mapInstance.on('locationfound', (e) => {
                const radius = e.accuracy / 2;
                L.marker(e.latlng).addTo(mapInstance)
                    .bindPopup(`You are within ${radius} meters from this point.`).openPopup();
                L.circle(e.latlng, radius).addTo(mapInstance);
            });

            mapInstance.on('locationerror', () => {
                alert('Location access denied.');
            });
        }
    }, []);

    return (
        <div>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
            <div className={style.heroInner}>
                <div className={style.heroText}>
                    <h1 className={style.her2}>Discover more than 5000 <span
                        className={style.her4}> skilled workers</span></h1>
                    <p className={style.her1}>Great platform for job seekers searching for new career heights and
                        passionate about making people happy.</p>
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '1.25rem',
                            padding: '12px 24px',
                            borderRadius: '8px'
                        }}
                        onClick={() => navigate('/appoint')}
                    >
                        Discover Now
                    </Button>
                </div>
                <div className={style.img1}>
                    <img src={combi} alt="Fashion Designer" className={style.img}/>
                    <img src={pic1} alt="Skill" className={style.img}/>
                    <img src={pic} alt="Hairstylist" className={style.img}/>
                    <img src={pic2} alt="Barber" className={style.img}/>
                    <img src={pic3} alt="Plumber" className={style.img}/>
                </div>
            </div>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                onSubmit={handleSearch}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for a location"
                    inputProps={{ 'aria-label': 'search locations' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>

            {/* Display search results */}
            <ul>
                {searchResults.map((result) => (
                    <li key={result.place_id} onClick={() => handleLocationClick(result.lat, result.lon, result.display_name)}>
                        {result.display_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hero;





