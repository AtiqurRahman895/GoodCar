import axios from "axios";

const cloud_name=import.meta.env.VITE_cloudinary_cloud_name
const api_url=`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
const useHostImage = () => {
    const hostImage=(file,setImage,setGoodImage)=>{

        // if(!file){
        //     return
        // }

        const formData = new FormData();
        formData.append("file", file); 
        formData.append("upload_preset", "goodCar"); 
        axios.post(api_url,formData,{
            headers: {"content-type": "multipart/form-data"}
        })
        .then((result)=>{
            // console.log(result.data.url)
            setImage(result.data.url)
            setGoodImage(result.data.url)
        })
        .catch((err)=>{
            setImage(false)
            setGoodImage(false)
            console.error(err)
        })
    }

    return hostImage
};

export default useHostImage;