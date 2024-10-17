import React from 'react'
import { social } from '../Data/dummuydata'
import { YouTube, Instagram, Twitter, Facebook } from '@mui/icons-material';


const getIconComponent = (iconName) => {
    switch (iconName) {
        case 'YouTube':
            return <YouTube />;
        case 'Instagram':
            return <Instagram />;
        case 'Twitter':
            return <Twitter />;
        case 'Facebook':
            return <Facebook />;
        default:
            return null;
    }
};
export default function Footer() {
    return (
        <>
            <footer>
                {social.map((item) => (
                    <>
                        <i>
                            {getIconComponent(item.icon)}
                        </i>
                    </>

                ))}
                <p>All Right Received 2024</p>
            </footer>
        </>
    )
}
