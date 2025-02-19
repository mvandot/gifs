import React from "react";
import './GifGallery.css';
import PropTypes from "prop-types";

const GifGallery = ({ giphyData }) => {
    return (
        <div className="gif">
            {giphyData.map((gif, index) => (
                <div className="gif__image-container" key={index}>
                    <img 
                        className="gif__image"
                        src={gif.images.fixed_height.url}
                        alt="gif"
                    />
                </div>
            ))}
        </div>
    );
}

GifGallery.propTypes = {
    giphyData: PropTypes.array.isRequired,
};

export default GifGallery;