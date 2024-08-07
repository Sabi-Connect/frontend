import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const SearchField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '50px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#B3B3B3',
            borderRadius: '50px',

        },
        '&:hover fieldset': {
            borderColor: '#B3B3B3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#B3B3B3',
        }
    },
});

const NavBar = () => {
    return (
        <>
            <div className={`flex items-center mb-4`}>
                <p className={`text-lg font-semibold`}>SabiConnect</p>
            </div>

            <div className={`hidden md:flex space-x-6 text-lg pl-96`}>
                <p className={`hidden md:flex space-x-6 text-lg`}>Home</p>
                <p className={`hover:text-gray-600 cursor-pointer`}>Find Worker</p>
                <p className={`hover:text-gray-600 cursor-pointer`}>Clients</p>
                <div>
                    <SearchField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                    />
                </div>
            </div>
            <div>
                <p>Hello World!</p>
            </div>

            <div className='flex items-center space-x-4'>
                <button className='bg-[#093c5e] text-white px-4 py-2 rounded-3xl hover:bg-[#093c5e]'>Login</button>
                <button className='bg-[#093c5e] text-white px-4 py-2 rounded-3xl hover:bg-[#093c5e]'>Signup</button>
            </div>
        </>
    );
};

export default NavBar;