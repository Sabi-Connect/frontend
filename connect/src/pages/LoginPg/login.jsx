import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const roundedStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '9999px',
        },
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/signUp')}
                    className="flex items-center text-green-600 hover:text-green-400"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            sx={roundedStyle}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            sx={roundedStyle}
                        />
                    </div>
                    <div className="mt-6">
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: 'green',
                                color: 'white',
                                paddingY: 2,
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: 'darkgreen',
                                },
                            }}
                        >
                            Log in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;