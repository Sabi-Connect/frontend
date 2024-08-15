import React from 'react';
import til from '../../../assets/taliologo.jpeg'
import til1 from '../../../assets/capenterLogo.png'
import til2 from '../../../assets/photograh.png'

import clean from '../../../assets/cleaning-icons.jpg'
import elect from '../../../assets/electriciansmybol.jpeg'
import hair from '../../../assets/hairStyl.png'
import fashion from '../../../assets/tailo.jpeg'
import plumber from '../../../assets/plumb2.jpeg'
import stylist from '../../../assets/hairstylist.webp'
import {Box, ButtonBase, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import style from'./index.module.css'
import {HiArrowRight} from "react-icons/hi";
import {useNavigate} from "react-router-dom";



const images = [
    {

        url: fashion,
        title: 'Fashion-Designer',
        width: '40%',
    },
    {
        url: plumber,
        title: 'Plumber',
        width: '30%',
    },
    {
        url:stylist,
        title: 'Hair-Stylist',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 250,
    border: '2px solid #ddd',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 150,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,

        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const Section1 = () => {
    const navigate = useNavigate();

    return (
        <div className={style.main}>

            <div>
                <div className={style.head3}>
                    <h3>Explore by category</h3>
                </div>
                <div className={style.sec}>
                    <div className={style.card}>
                        <img className={style.img} src={til} alt="design"/>
                        <p className={style.secA}>Fashion Design</p>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>

                    <div className={style.card}>
                    <div>
                            <img className={style.img} src={clean} alt="clean"/>
                        </div>

                        <p className={style.secA}>Cleaners</p>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={elect} alt="electrician"/>
                        <h1 className={style.secA}>Electrician</h1>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={hair} alt="HairStylist"/>
                        <h1 className={style.secA}>HairStylist</h1>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>
                </div>

                <div className={style.sec}>
                    <div className={style.card}>
                        <div className={style.img}>
                            <img className={style.img} src={til1} alt="design"/>
                        </div>

                        <p className={style.secA}>Carpenter</p>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                        {/*<HiArrowRight />*/}
                    </div>

                    <div className={style.card}>
                        <div>
                            <img className={style.img} src={til2} alt="clean"/>
                        </div>

                        <p className={style.secA}>Photographer</p>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={elect} alt="electrician"/>
                        <h1 className={style.secA}>Electrician</h1>
                        <p>available jobs  <HiArrowRight onClick={() => navigate('/book')} /></p>
                    </div>
                    <div className={style.card}>
                        <img className={style.img} src={hair} alt="HairStylist"/>
                        <h1 className={style.secA}>HairStylist</h1>
                        <p>available jobs <HiArrowRight onClick={() => navigate('/book')}/></p>
                    </div>
                </div>
            </div>


            {/*<Box sx={{ textAlign: 'center', mb: 4 }}>*/}
            {/*    <Typography variant="h4">Explore by category</Typography>*/}
            {/*</Box>*/}
            {/*<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mb: 4 }}>*/}
            {/*    <Box sx={{ width: '200px', textAlign: 'center', mb: 2 }}>*/}
            {/*        <img src={img} alt="Fashion Design" style={{ width: '100%' }} />*/}
            {/*        <Typography variant="h6">Fashion Design</Typography>*/}
            {/*        <Typography variant="body2">available jobs -></Typography>*/}
            {/*    </Box>*/}
            {/*    <Box sx={{ width: '200px', textAlign: 'center', mb: 2 }}>*/}
            {/*        <img src={clean} alt="Cleaners" style={{ width: '100%' }} />*/}
            {/*        <Typography variant="h6">Cleaners</Typography>*/}
            {/*        <Typography variant="body2">available jobs -></Typography>*/}
            {/*    </Box>*/}
            {/*    <Box sx={{ width: '200px', textAlign: 'center', mb: 2 }}>*/}
            {/*        <img src={elect} alt="Electrician" style={{ width: '100%' }} />*/}
            {/*        <Typography variant="h6">Electrician</Typography>*/}
            {/*        <Typography variant="body2">available jobs -></Typography>*/}
            {/*    </Box>*/}
            {/*    <Box sx={{ width: '200px', textAlign: 'center', mb: 2 }}>*/}
            {/*        <img src={hair} alt="HairStylist" style={{ width: '100%' }} />*/}
            {/*        <Typography variant="h6">HairStylist</Typography>*/}
            {/*        <Typography variant="body2">available jobs -></Typography>*/}
            {/*    </Box>*/}
            {/*</Box>*/}


            <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                        <ImageBackdrop className="MuiImageBackdrop-root"/>
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root"/>
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
};

export default Section1;