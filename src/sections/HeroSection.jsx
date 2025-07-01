const HeroSection = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="images\hero-img.png"
          alt="Hero Image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freeking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
