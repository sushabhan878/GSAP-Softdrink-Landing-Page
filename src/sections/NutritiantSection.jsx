const NutritiantSection = () => {
  return (
    <section className="min-h-dvh 2xl:h-[120dvh] overflow-hidden relative">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-center"
      />
      <img
        src="/images/big-img.png"
        alt=""
        className="w-full absolute 2xl:h-full md:h-2/3 h-1/2 left-0 bottom-0 object-bottom 2xl:object-contain object-cover"
      />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14">
        <div className="relative inline-block md:translate-y-20">
          <div className="relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1>It still does.</h1>
            </div>
            <div
              className="rotate-[-3deg] border-[.5vw] border-[#e3d3bc] text-nowrap opacity-0 md:-mt-32 -mt-24 place-self-start"
              style={{}}
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 mt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritiantSection;
