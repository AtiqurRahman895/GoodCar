import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import useHostImage from "../../Hooks/useHostImage";

const ImageInputSection = ({image,setImage,goodImage,setGoodImage}) => {
    const hostImage=useHostImage()
    // const handleImageChange = (e) => {
    //     const url = e.target.value;
    //     setImage(url); // Reset error

    //     const img = new Image();
    //     img.onload = () => setGoodImage(url); 
    //     img.onerror = () => {
    //         setGoodImage(false);
    //     };
    //     img.src = url; 
    // };
    const handleImageChange=(e)=>{
        const file=e.target.files[0]
        // console.log(file)
        hostImage(file,setImage,setGoodImage)
    }
    console.log(goodImage)
    return (
        <header className="">
            <div className={`max-w-[1536px] mx-auto relative ${goodImage?"aspect-auto":"bg-custom-primary aspect-[4/2.5] sm:aspect-[4/1.5]"}`}>
                <img src={goodImage?goodImage:""} alt="" className="bg-custom-primary max-w-full m-auto" />

                {/* Image */}
                <div className={`${goodImage?"!text-custom-primary":"!text-white "} input-box absolute grid justify-items-center content-center top-0 bottom-0 right-0 left-0`}>

                    <label htmlFor="image" className="input-label relative hover:[&_.absolute]:animate-none [&_.absolute]:animate-ping">
                        <MdOutlineAddPhotoAlternate className={`absolute ![animation-duration:1.5s] text-4xl xs:text-7xl`} />
                        <MdOutlineAddPhotoAlternate className={`text-5xl xs:text-7xl`} />
                    </label>
                    <div className="input-field label form-control h-fit absolute focus-within:relative scale-0 focus-within:scale-100">
                        {/* <input value={image} placeholder='Add Cover Image' type='text' name="image" className="input input-ghost !text-white bg-transparent focus:!bg-transparent input-bordered !outline-none !border-white rounded-sm" required/> */}
                        <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="file-input file-input-ghost bg-transparent focus:!bg-transparent !outline-none file-input-bordered !border-white rounded-sm absolute opacity-0 cursor-pointer" required/>
                        <b className="text-center">{image||"Choose a Image"}</b>

                    </div>


                </div>


            </div>
        </header>
    );
};

export default ImageInputSection;