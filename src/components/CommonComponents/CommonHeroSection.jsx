
const CommonHeroSection = ({headerTitle,headerSubTitle}) => {
    return (
        <section className={`bg-black `}>
            <div className={`bg-[url(https://i.ibb.co.com/NpS7T3c/performance.jpg)] bg-center bg-cover bg-no-repeat `}>
                <div className="h-[60svh] container text-white text-center flex flex-col justify-center font-bold">
                    {
                        headerSubTitle&&<h6 className="text-custom-primary">{headerSubTitle}</h6>
                    }
                    <h2 className='sectionHeaderWidth'>{headerTitle}</h2>
                </div>
            </div> 
        </section>
    );
};

export default CommonHeroSection;