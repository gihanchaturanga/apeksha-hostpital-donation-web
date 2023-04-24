import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button, Grid, Hidden } from '@mui/material';

export default function GalleryCategory() {

    const handleClick = (event) => {
        alert('handling the fuck out of it..!' + event.target.id)
    }

  return (
    <>
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
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                    />
                    </ImageListItem>
                </Grid>
                ))}
        </Grid>
    </>
  );
}

const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  }
];