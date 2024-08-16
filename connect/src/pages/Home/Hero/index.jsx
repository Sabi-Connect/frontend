// import React from 'react';
// import combi from '../../../assets/fashiondesigner.jpg';
// import pic from './../../../assets/hairstylist.jpg';
// import pic1 from '../../../assets/Skill.png';
// import pic2 from '../../../assets/barber.jpg';
// import pic3 from '../../../assets/plumb1.jpeg';
//
// import style from './index.module.css';
// import { Button } from "@mui/material";
//
//
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
//
//
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import parse from 'autosuggest-highlight/parse';
// import { debounce } from '@mui/material/utils';
// import {useNavigate} from "react-router-dom";
//
// const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_KEY;
//
// function loadScript(src, position, id) {
//     if (!position) {
//         return;
//     }
//
//     const script = document.createElement('script');
//     script.setAttribute('async', '');
//     script.setAttribute('id', id);
//     script.src = src;
//     position.appendChild(script);
// }
//
// const autocompleteService = { current: null };
//
// autocompleteService.current.getPlacePredictions = function (request, callback) {
//
// };
// const Hero = () => {
//     const navigate = useNavigate();
//     const [value, setValue] = React.useState(null);
//     const [inputValue, setInputValue] = React.useState('');
//     const [options, setOptions] = React.useState([]);
//     const loaded = React.useRef(false);
//
//     if (typeof window !== 'undefined' && !loaded.current) {
//         if (!document.querySelector('#google-maps')) {
//             loadScript(
//                 `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
//                 document.querySelector('head'),
//                 'google-maps',
//             );
//         }
//
//         loaded.current = true;
//     }
//
//     const fetch = React.useMemo(
//         () =>
//             debounce((request, callback) => {
//                 autocompleteService.current.getPlacePredictions(request, callback);
//             }, 400),
//         [],
//     );
//
//     React.useEffect(() => {
//         let active = true;
//
//         if (!autocompleteService.current && window.google) {
//             autocompleteService.current =
//                 new window.google.maps.places.AutocompleteService();
//         }
//         if (!autocompleteService.current) {
//             return undefined;
//         }
//
//         if (inputValue === '') {
//             setOptions(value ? [value] : []);
//             return undefined;
//         }
//
//         fetch({ input: inputValue }, (results) => {
//             if (active) {
//                 let newOptions = [];
//
//                 if (value) {
//                     newOptions = [value];
//                 }
//
//                 if (results) {
//                     newOptions = [...newOptions, ...results];
//                 }
//
//                 setOptions(newOptions);
//             }
//         });
//
//         return () => {
//             active = false;
//         };
//     }, [value, inputValue, fetch]);
//
//     return (
//         <div>
//             <div className={style.heroInner}>
//                 <div className={style.heroText}>
//                     <h1 className={style.her2}>Discover more than 5000 <span className={style.her4}> skilled worker</span></h1>
//                     <p className={style.her1}>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             fontSize: '1.25rem',
//                             padding: '12px 24px',
//                             borderRadius: '8px'
//                         }} onClick={() => navigate('/appoint')}
//                     >
//                         Discover Now
//                     </Button>
//                 </div>
//                 <div className={style.img1}>
//                     <img src={combi} alt="lab" className={style.img}/>
//                     <img src={pic1} alt="lab" className={style.img}/>
//                     <img src={pic} alt="lab" className={style.img}/>
//                     <img src={pic2} alt="lab" className={style.img}/>
//                     <img src={pic3} alt="lab" className={style.img}/>
//
//                 </div>
//             </div>
//
//             <Paper
//                 component="form"
//                 sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//             >
//                 <IconButton sx={{ p: '10px' }} aria-label="menu">
//                     <MenuIcon />
//                 </IconButton>
//                 <InputBase
//                     sx={{ ml: 1, flex: 1 }}
//                     placeholder="Search Google Maps"
//                     inputProps={{ 'aria-label': 'search google maps' }}
//                 />
//                 <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//                     <SearchIcon />
//                 </IconButton>
//                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//                 <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
//                     <DirectionsIcon />
//                 </IconButton>
//             </Paper>
//
//
//             <Autocomplete
//                 id="google-map-demo"
//                 sx={{ width: 300 }}
//                 getOptionLabel={(option) =>
//                     typeof option === 'string' ? option : option.description
//                 }
//                 filterOptions={(x) => x}
//                 options={options}
//                 autoComplete
//                 includeInputInList
//                 filterSelectedOptions
//                 value={value}
//                 noOptionsText="No locations"
//                 onChange={(event, newValue) => {
//                     setOptions(newValue ? [newValue, ...options] : options);
//                     setValue(newValue);
//                 }}
//                 onInputChange={(event, newInputValue) => {
//                     setInputValue(newInputValue);
//                 }}
//                 renderInput={(params) => (
//                     <TextField {...params} label="Add a location" fullWidth />
//                 )}
//                 renderOption={(props, option) => {
//                     const { key, ...optionProps } = props;
//                     const matches =
//                         option.structured_formatting.main_text_matched_substrings || [];
//
//                     const parts = parse(
//                         option.structured_formatting.main_text,
//                         matches.map((match) => [match.offset, match.offset + match.length]),
//                     );
//                     return (
//                         <li key={key} {...optionProps}>
//                             <Grid container sx={{ alignItems: 'center' }}>
//                                 <Grid item sx={{ display: 'flex', width: 44 }}>
//                                     <LocationOnIcon sx={{ color: 'text.secondary' }} />
//                                 </Grid>
//                                 <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
//                                     {parts.map((part, index) => (
//                                         <Box
//                                             key={index}
//                                             component="span"
//                                             sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
//                                         >
//                                             {part.text}
//                                         </Box>
//                                     ))}
//                                     <Typography variant="body2" color="text.secondary">
//                                         {option.structured_formatting.secondary_text}
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </li>
//                     );
//                 }}
//             />
//         </div>
//
//
//
//     // <Autocomplete
//     //     id="google-map-demo"
//     //     sx={{ width: 300 }}
//     //     getOptionLabel={(option) =>
//     //         typeof option === 'string' ? option : option.description
//     //     }
//     //     filterOptions={(x) => x}
//     //     options={options}
//     //     autoComplete
//     //     includeInputInList
//     //     filterSelectedOptions
//     //     value={value}
//     //     noOptionsText="No locations"
//     //     onChange={(event, newValue) => {
//     //         setOptions(newValue ? [newValue, ...options] : options);
//     //         setValue(newValue);
//     //     }}
//     //     onInputChange={(event, newInputValue) => {
//     //         setInputValue(newInputValue);
//     //     }}
//     //     renderInput={(params) => (
//     //         <TextField {...params} label="Add a location" fullWidth />
//     //     )}
//     //     renderOption={(props, option) => {
//     //         const { key, ...optionProps } = props;
//     //         const matches =
//     //             option.structured_formatting.main_text_matched_substrings || [];
//     //
//     //         const parts = parse(
//     //             option.structured_formatting.main_text,
//     //             matches.map((match) => [match.offset, match.offset + match.length]),
//     //         );
//     //         return (
//     //             <li key={key} {...optionProps}>
//     //                 <Grid container sx={{ alignItems: 'center' }}>
//     //                     <Grid item sx={{ display: 'flex', width: 44 }}>
//     //                         <LocationOnIcon sx={{ color: 'text.secondary' }} />
//     //                     </Grid>
//     //                     <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
//     //                         {parts.map((part, index) => (
//     //                             <Box
//     //                                 key={index}
//     //                                 component="span"
//     //                                 sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
//     //                             >
//     //                                 {part.text}
//     //                             </Box>
//     //                         ))}
//     //                         <Typography variant="body2" color="text.secondary">
//     //                             {option.structured_formatting.secondary_text}
//     //                         </Typography>
//     //                     </Grid>
//     //                 </Grid>
//     //             </li>
//     //         );
//     //     }}
//     // />
//
//     );
// };
//
// export default Hero;
//


import React from 'react';
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
import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import { useNavigate } from "react-router-dom";

// const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_KEY;

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const Hero = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    const autocompleteService = React.useRef(null);

    // if (typeof window !== 'undefined' && !loaded.current) {
    //     if (!document.querySelector('#google-maps')) {
    //         loadScript(
    //             // `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
    //             document.querySelector('head'),
    //             'google-maps',
    //         );
    //     }
    //
    //     loaded.current = true;
    // }

    const fetch = React.useMemo(
        () =>
            debounce((request, callback) => {
                if (autocompleteService.current) {
                    autocompleteService.current.getPlacePredictions(request, callback);
                }
            }, 400),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService();
        }

        if (!autocompleteService.current || inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <div>
            <div className={style.heroInner}>
                <div className={style.heroText}>
                    <h1 className={style.her2}>Discover more than 5000 <span className={style.her4}> skilled workers</span></h1>
                    <p className={style.her1}>Great platform for job seekers searching for new career heights and passionate about making people happy.</p>
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
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>

            <Autocomplete
                id="google-map-demo"
                sx={{ width: 300 }}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                }
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText="No locations"
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Add a location" fullWidth />
                )}
                renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    const matches =
                        option.structured_formatting.main_text_matched_substrings || [];

                    const parts = parse(
                        option.structured_formatting.main_text,
                        matches.map((match) => [match.offset, match.offset + match.length]),
                    );
                    return (
                        <li key={key} {...optionProps}>
                            <Grid container sx={{ alignItems: 'center' }}>
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                                </Grid>
                                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                    {parts.map((part, index) => (
                                        <Box
                                            key={index}
                                            component="span"
                                            sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                                        >
                                            {part.text}
                                        </Box>
                                    ))}
                                    <Typography variant="body2" color="text.secondary">
                                        {option.structured_formatting.secondary_text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </li>
                    );
                }}
            />
        </div>
    );
};

export default Hero;
