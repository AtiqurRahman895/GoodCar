
const CommonHeroSection = ({heroImage,heroTitle,heroSubTitle}) => {
    return (
        <section className={``}>
                <div className={`bg-center bg-cover bg-no-repeat `} style={{backgroundImage:`url(${heroImage})`}}>
                    <div className="h-[60svh] container text-white text-center flex flex-col justify-center font-bold">
                        {
                            heroSubTitle&&<h6 className="text-custom-primary">{heroSubTitle}</h6>
                        }
                        <h2 className='sectionHeaderWidth'>{heroTitle}</h2>
                    </div>
                </div> 

        </section>
    );
};

export default CommonHeroSection;