import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

const useBannerHeightWidth = ({BannerRef}) => {
    const [bannerSectionWidth,setBannerSectionWidth]=useState(0)
    const [bannerSectionHeight,setBannerSectionHeight]=useState(0)
    const [screenWidth,setScreenWidth]=useState(0)
    const screen =window.innerWidth

    useEffect(()=>{
        setScreenWidth(screen)
        const updateSectionHeightWidth=()=>{
            if(BannerRef?.current){
                setBannerSectionWidth(BannerRef.current.offsetWidth)
                setBannerSectionHeight(BannerRef.current.offsetHeight)
            }
        }
        // setTimeout(updateSectionHeightWidth, 300);
        updateSectionHeightWidth()
        window.addEventListener(`resize`,()=>{
          updateSectionHeightWidth()
        })
        return ()=>{
            window.removeEventListener(`resize`,updateSectionHeightWidth())
        }
    },[BannerRef,screen]) 
    return {screenWidth,bannerSectionWidth,bannerSectionHeight};
};

useBannerHeightWidth.propTypes = {
    BannerRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element),
    }).isRequired,
};

export default useBannerHeightWidth;