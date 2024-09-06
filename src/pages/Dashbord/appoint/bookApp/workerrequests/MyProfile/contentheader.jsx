import React, {useState} from 'react';
import style from './content.module.css';
import {useNavigate} from "react-router-dom";
import igmIc from "../../../../../../assets/imageiconR.png";
import crop from "../../../../../../assets/skilledcrop.jpg";
import {FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, useTheme} from "@mui/material";
import {addSkillApi, updateProfileApi} from "../../../../../../component/skilledworkerApi";

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
            const response = await updateProfileApi(userData);

            if (response.ok) {

                alert('Profile updated successfully');
                navigate('/login');
            } else {

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
