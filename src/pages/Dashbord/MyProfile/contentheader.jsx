// import React, {useState} from 'react';
// import style from './content.module.css'
// import {useNavigate} from "react-router-dom";
// import igmIc from "../../../assets/imageiconR.png";
// import crop from "../../../assets/skilledcrop.jpg"
// import {
//     FormControl,
//     FormControlLabel,
//     InputLabel,
//     MenuItem,
//     OutlinedInput, Radio,
//     RadioGroup,
//     Select,
//     useTheme
// } from "@mui/material";
//
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };
//
// const names = [
//     'Male',
//     'Female',
//     'Others',
//
// ];
//
// function getStyles(name, selectedName, theme) {
//     return {
//         fontWeight:
//             selectedName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegula
//                 : theme.typography.fontWeightMedium,
//     };
// }
//
// const ContentHeader = () => {
//
//     const [selectedImage, setSelectedImage] = useState(crop);
//     const [selectedValue, setSelectedValue] = React.useState('a');
//     const theme = useTheme();
//     const [selectedName, setSelectedName] = React.useState([]);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         PhoneNumber: '',
//         email: '',
//         DateOfBirth: '',
//         gender: '',
//         accountType:''
//     });
//     const navigate = useNavigate();
//
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//
//     const handleClick = (e) => {
//         e.preventDefault();
//         document.getElementById('fileInput').click();
//     };
//
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setSelectedImage(imageUrl);
//         }
//     };
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         setSelectedName(value);
//         setSelectedValue(value);
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Example API endpoint (replace with your actual endpoint)
//             const response = await fetch('https://your-backend-api.com/updateProfile', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//
//             if (response.ok) {
//                 // Profile successfully saved
//                 alert('Profile updated successfully');
//                 navigate('/login'); // Redirect to login page
//             } else {
//                 // Handle errors
//                 alert('Failed to update profile. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             alert('An error occurred. Please try again.');
//         }
//     };
//         console.log(formData);
//
//
//
//     return (
//         <div className={style.contentheader}>
//             <div className={style.sectionContainer}>
//                 <p>My Profile</p>
//                 <p>Login Details</p>
//                 <p>Notification</p>
//
//             </div>
//             <hr className={style.topHorizontalLine}/>
//             <div className={style.base1}>
//                 <h2 className={style.content2}>Basic information</h2>
//                 <p>This is your personal information that you can update anytime.</p>
//             </div>
//             <hr className={style.topHorizontalLine}/>
//
//             <div className={style.profContainer}>
//                 <div>
//                     <h2>Profile photo</h2>
//                     <p>This image will be shown publicly<br/> as your profile picture, it will<br/> help recruiters
//                         recognize
//                         you!</p>
//                 </div>
//                 <div className={style.uploadArea}>
//                     <img className={style.cropPic} src={selectedImage || crop} alt="Profile"/>
//                     <div className={style.iconContainer}>
//                         <input
//                             type="file"
//                             id="fileInput"
//                             className={style.fileInput}
//                             onChange={handleFileChange}
//                             accept="image/*"
//                             style={{display: 'none'}}
//                         />
//                         <label htmlFor="fileInput" className={style.uploadLabel}>
//                             <img className={style.uploadIcon} src={igmIc} alt="Upload icon"/>
//                             <p className={style.linkButton}>
//                                 <a href="#" onClick={handleClick}>
//                                     <span className={style.buttonstyle}>Click to replace</span>
//                                 </a>
//                                 or drag and drop
//                                 <br/>
//                                 SVG, PNG, JPG or GIF (max. 400 x 400px)
//                             </p>
//                         </label>
//                     </div>
//                 </div>
//             </div>
//
//             <hr className={style.topHorizontalLine}/>
//
//             <div className={style.personContainer}>
//                 <h2>Personal Details</h2>
//                 <div>
//                     <form onSubmit={handleSubmit} className={style.formContainer}>
//                         <div>
//                             <label>
//                                 FullName *
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     placeholder=""
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </label>
//                         </div>
//
//                         <div className={style.phoEmail}>
//                             <div className={style.phoneContainer}>
//                                 <label>
//                                     PhoneNumber *
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={formData.PhoneNumber}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </label>
//                             </div>
//                             <div className={style.emailContainer}>
//                                 <label>
//                                     Email *
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//
//
//                         <div>
//                             <label>
//                                 DateOfBirth
//                                 <input
//                                     type="text"
//                                     name="dateofbirth"
//                                     placeholder=""
//                                     value={formData.DateOfBirth}
//                                     onChange={handleChange}
//                                 />
//                                 Gender
//                                 <InputLabel>
//                                     <Select
//                                         labelId="demo-single-name-label"
//                                         id="demo-single-name"
//                                         value={selectedName}
//                                         onChange={handleChange}
//                                         input={<OutlinedInput label="Name" className={style.genderContainer}/>}
//                                         MenuProps={MenuProps}
//                                     >
//                                         {names.map((name) => (
//                                             <MenuItem
//                                                 key={name}
//                                                 value={name}
//                                                 style={getStyles(name, selectedName, theme)}
//                                             >
//                                                 {name}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </InputLabel>
//
//                             </label>
//                         </div>
//
//                     </form>
//                 </div>
//
//             </div>
//             <FormControl component="fieldset">
//                 <div className={style.formControl}>
//                     <div>
//                         <h2 component="legend" className={style.legend}>Account Type</h2>
//                         {/*<FormLabel component="legend" className={style.legend}>Account Type</FormLabel>*/}
//                         <p className={style.description}>You can update your account type</p>
//                     </div>
//                     <RadioGroup
//                         aria-label="account type"
//                         name="accountType"
//                         value={selectedValue}
//                         onChange={handleChange}
//                         className={style.radioGroup}
//
//                     >
//                         <div>
//                             <div className={style.optionContainer}>
//                                 <FormControlLabel
//                                     value="Skilled-Worker"
//                                     control={<Radio/>}
//                                     label={
//                                         <div className={style.labelContainer}>
//                                             <h1 className={style.labelTitle}>Skilled-Worker</h1>
//                                             <p className={style.labelDescription}>Looking for a job</p>
//                                         </div>
//                                     }
//                                     className={style.formControlLabel}
//                                 />
//                             </div>
//                             <div className={style.optionContainer}>
//                                 <FormControlLabel
//                                     value="Client"
//                                     control={<Radio/>}
//                                     label={
//                                         <div className={style.labelContainer}>
//                                             <h1 className={style.labelTitle}>Client</h1>
//                                             <p className={style.labelDescription}>Hiring, sourcing candidates
//                                                 job</p>
//                                         </div>
//                                     }
//                                     className={style.formControlLabel}
//                                 />
//                             </div>
//                         </div>
//
//                     </RadioGroup>
//                 </div>
//
//
//             </FormControl>
//
//             <hr className={style.topHorizontalLine}/>
//             <div className={style.bottonContainer}>
//                 <button>Save Profile</button>
//             </div>
//             <hr className={style.topHorizontalLine}/>
//             <div className={style.headeractivity}>
//                 <h1 className={style.headertitle}>Dashboard</h1>
//                 <button onClick={() => navigate('/')}>Back to homepage</button>
//             </div>
//         </div>
//     );
// };
//
// export default ContentHeader;


import React, {useState} from 'react';
import style from './content.module.css';
import {useNavigate} from "react-router-dom";
import igmIc from "../../../assets/imageiconR.png";
import crop from "../../../assets/skilledcrop.jpg";
import {FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, useTheme} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = ['Male', 'Female', 'Others'];

function getStyles(name, selectedName, theme) {
    return {
        fontWeight:
            selectedName.indexOf(name) === -1
                ? theme.typography.fontWeightRegula
                : theme.typography.fontWeightMedium,
    };
}

const ContentHeader = () => {
    const [selectedImage, setSelectedImage] = useState(crop);
    const [formData, setFormData] = useState({
        fullName: '',
        PhoneNumber: '',
        email: '',
        DateOfBirth: '',
        gender: '',
        accountType: ''
    });
    const [selectedName, setSelectedName] = useState([]);
    const [selectedValue, setSelectedValue] = useState('a');
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        setSelectedName(value);
        setSelectedValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Example API endpoint (replace with your actual endpoint)
            const response = await fetch('https://your-backend-api.com/updateProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Profile successfully saved
                alert('Profile updated successfully');
                navigate('/login'); // Redirect to login page
            } else {
                // Handle errors
                alert('Failed to update profile. Please try again.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className={style.contentheader}>
            <div className={style.sectionContainer}>
                <p>My Profile</p>
                <p>Login Details</p>
                <p>Notification</p>
            </div>
            <hr className={style.topHorizontalLine}/>
            <div className={style.base1}>
                <h2 className={style.content2}>Basic information</h2>
                <p>This is your personal information that you can update anytime.</p>
            </div>
            <hr className={style.topHorizontalLine}/>

            <div className={style.profContainer}>
                <div>
                    <h2>Profile photo</h2>
                    <p>This image will be shown publicly as your profile picture.</p>
                </div>
                <div className={style.uploadArea}>
                    <img className={style.cropPic} src={selectedImage || crop} alt="Profile"/>
                    <div className={style.iconContainer}>
                        <input
                            type="file"
                            id="fileInput"
                            className={style.fileInput}
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{display: 'none'}}
                        />
                        <label htmlFor="fileInput" className={style.uploadLabel}>
                            <img className={style.uploadIcon} src={igmIc} alt="Upload icon"/>
                            <p className={style.linkButton}>
                                <a href="#" onClick={handleClick}>
                                    <span className={style.buttonstyle}>Click to replace</span>
                                </a>
                                or drag and drop
                                <br/>
                                SVG, PNG, JPG or GIF (max. 400 x 400px)
                            </p>
                        </label>
                    </div>
                </div>
            </div>

            <hr className={style.topHorizontalLine}/>

            <div className={style.personContainer}>
                <h2>Personal Details</h2>
                <form onSubmit={handleSubmit} className={style.formContainer}>
                    <div>
                        <label>
                            FullName *
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={style.phoEmail}>
                        <div className={style.phoneContainer}>
                            <label>
                                PhoneNumber *
                                <input
                                    type="tel"
                                    name="PhoneNumber"
                                    value={formData.PhoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className={style.emailContainer}>
                            <label>
                                Email *
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            DateOfBirth
                            <input
                                type="text"
                                name="DateOfBirth"
                                value={formData.DateOfBirth}
                                onChange={handleChange}
                            />
                        </label>
                        Gender
                        <InputLabel>
                            <Select
                                labelId="demo-single-name-label"
                                id="demo-single-name"
                                value={selectedName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name"/>}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, selectedName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </InputLabel>
                    </div>

                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="account type"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="Skilled-Worker"
                                control={<Radio/>}
                                label="Skilled-Worker"
                            />
                            <FormControlLabel
                                value="Client"
                                control={<Radio/>}
                                label="Client"
                            />
                        </RadioGroup>
                    </FormControl>

                    <button type="submit">Save Profile</button>
                </form>
            </div>
        </div>
    );
};

export default ContentHeader;
