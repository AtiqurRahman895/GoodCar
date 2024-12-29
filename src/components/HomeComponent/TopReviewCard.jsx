
const TopReviewCard = ({review}) => {
    return (
        <a href={review.review_link} target="_blank" className="">
            <div className="bg-white rounded-md mx-0.5 md:mx-3 p-6">
                <p>{review.review}</p>
                <div className="divider my-2"></div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <img
                            alt="User Photo"
                            src={review.reviewerImage?`${review.reviewerImage}`:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            className="w-10 rounded-full"
                        />
                        <div className="space-y-0">
                            <h6 className="text-black">{review.reviewer}</h6>
                            <p className="leading-snug" >Customer</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </a>

    );
};

export default TopReviewCard;