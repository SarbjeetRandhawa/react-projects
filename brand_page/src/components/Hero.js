const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST
                </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="second-btn">Category</button>

                </div>

                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="icons">
                        <img src="/amazon.png" alt="" />
                        <img src="/flipkart.png" alt="" />

                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/shoe_image.png" alt="" />

            </div>

        </div>
    );
};

export default Hero;

