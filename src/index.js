import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';

// CSS File Here
import 'swiper/css';
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);


