import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '../../common/TopNav/TopNav';
import { Footer } from '../../common/Footer/Footer';

export default function GalleryCategory() {

    const nav = useNavigate();

    const handleClick = (event) => {
        nav('/gallery/'+event.target.id+'/'+event.target.title);
    }

    

  return (
    <>
    <ResponsiveAppBar />
    <Typography variant='h3' sx={{color: "#4C3B2BF0", textAlign: 'center',fontFamily: "ItimBold",fontWeight: 900}} marginY={3}>{'Gallery'}</Typography>
        <Grid container spacing={2} marginY={2} paddingX={2}>
        
                {itemData.map((item) => (
                    <Grid item xs={12} sm={10} md={6} lg={4}>
                    <ImageListItem key={item.img} sx={{cursor: 'pointer'}} onClick={handleClick}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title} 
                        loading="lazy" 
                        id={item.id}
                        title={item.name}
                    />
                    <Box marginX={1}>
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>{item.author}</span>}
                            position="below"
                        />
                    </Box>
                    </ImageListItem>
                </Grid>
                ))}
        </Grid>
        <Footer />
    </>
  );
}

const itemData = [
  {
    id: 1,
    name: "Education Charties",
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    id: 2,
    name: 'Healthcare Charities',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    id: 3,
    name: 'Sanatery Charities',
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    id: 4,
    name: 'Other Charities',
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  }
];