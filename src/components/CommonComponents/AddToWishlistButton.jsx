// import { useContext } from "react";
// import { CgHeart } from "react-icons/cg";
// import { Tooltip } from "react-tooltip";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import useAxios from "../../Hooks/useAxios";

// const AddToWishlistButton = ({ _id, image, title, category, buttonClass, iconClass,}) => {
//   const navigate = useNavigate();
//   const { user, logoutUser } = useContext(AuthContext);
//     const secureAxios = useSecureAxios();

//   const handleWishlistButton = () => {
//     if (!user) {
//       toast.warning(
//         "Currently you are not logged in. Login first to add the blog to the wishlist"
//       );
//       return;
//     }
//     const params = { query: { blog_id: _id, user_email: user.email } };

//     secureAxios.get("/Wishlist", {params})
//       .then((res) => {
//         if (res.data.length > 0) {
//           toast.info("You have already added this blog to the wishlist once!");
//           return Promise.reject("Already in wishlist");
//         }
//         const wishlistCredentials = { blog_id: _id, image, title, category, user_email: user.email,};

//         return secureAxios.post("/addToWishlist", wishlistCredentials );
//       })
//       .then(() => {
//         toast.success(`You have successfully added This blog to the wishlist!`);
//       })
//       .catch((error) => {
//         console.error("Error finding blogs:", error);
//       });
//   };
  
//   return (
//     <>
//       <button
//         onClick={handleWishlistButton}
//         type="Button"
//         className={`AddToWishlistButton primaryButton2 activePrimaryButton2 ${buttonClass}`}
//       >
//         <CgHeart className={`${iconClass}`} />
//       </button>
//       <Tooltip
//         anchorSelect=".AddToWishlistButton"
//         className="!bg-custom-primary"
//       >
//         Add to wishlist!
//       </Tooltip>
//     </>
//   );
// };

// export default AddToWishlistButton;
