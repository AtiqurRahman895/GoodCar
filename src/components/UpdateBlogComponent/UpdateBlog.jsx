import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";
import ImageInputSection from "../AddBlogComponent/ImageInputSection";
import ShortDiscriptionSection from "../AddBlogComponent/ShortDiscriptionSection";
import LongDiscriptionSection from "../AddBlogComponent/LongDiscriptionSection";
import Loading from "../AuthenticationComponent/Loading";
import TitleInputSection from "../AddBlogComponent/TitleInputSection";
import useSecureAxios from "../../Hooks/useSecureAxios";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const blogInfo = useLoaderData();
  const secureAxios = useSecureAxios();
  const { user, logoutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const {_id,image,category,title,author,author_email,published,short_discription,long_discription,word_count}=blogInfo&&blogInfo

  const [image, setImage] = useState(blogInfo?.image);
  // const [goodImage, setGoodImage] = useState(blogInfo?.image);

  // const [category,setCategory]= useState(blogInfo?.category)
  const category = blogInfo?.category;

  const [title, setTitle] = useState(blogInfo?.title);

  const author = blogInfo?.author;
  const published = blogInfo?.published;

  const [short_discription, setShort_discription] = useState(
    blogInfo.short_discription
  );

  const [rawQuillValue, setRawQuillValue] = useState(
    blogInfo.long_discription
  );
  const [long_discription, setLong_discription] = useState(
    blogInfo.long_discription
  );
  const [word_count, setWord_count] = useState(blogInfo.word_count);


  const handleSubmit = (e) => {
    const short_discription_word_count = short_discription
      .replace(/<[^>]*>/g, " ")
      .trim()
      .split(/\s+/).length;

    e.preventDefault();

    if (!user?.email && !user?.displayName) {
      toast.error(
        "Currently you are not Logged in. Login first to update this Blog!"
      );
      navigate("/login");
      return;
    } else if (short_discription_word_count < 10) {
      toast.warning(
        `Please lenghten Short Discription to 10 or more word! (Currently has ${short_discription_word_count} words)`
      );
      return;
    } else if (word_count < 20) {
      toast.warning(
        `Please lenghten Long Discription to 20 or more word! (Currently has ${word_count} words)`
      );
      return;
    } else if (!image) {
      toast.warning("You must upload a image. Only JPG, PNG, GIF image files are allowed, and the maximum file size is 10MB. Please select an appropriate image file to proceed!");
      return;
    }

    // console.log(image,category,title,author,author_email,published,short_discription,long_discription,word_count)

    const blogCredentials = {
      _id: blogInfo._id,
      image,
      category,
      title,
      short_discription,
      long_discription,
      word_count,
      author_email: blogInfo.author_email,
    };
    setLoading(true)
    secureAxios.put("/updateBlog", blogCredentials,)
      .then(() => {
        e.target.reset();
        toast.success("You have successfully updated this Blog!");
      })
      .catch((error) => {
        console.error("Error updating Blog:", error);
        toast.error(
          error.response?.data?.message || `Failed to update this blog?`
        );
      }).finally(()=>{
        setLoading(false)
      })
  };

  return (
    <main className="">
      <Helmet>
        <title>Upate Blog | MORE BLOGS</title>
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className="mb-6 space-y-8">
          <ImageInputSection
            image={image}
            setImage={setImage}
            // goodImage={goodImage}
            // setGoodImage={setGoodImage}
          />

          <section className="">
            <div className="container grid justify-items-center ">
              <h6 className="text-custom-primary">- {category} -</h6>

              <TitleInputSection title={title} setTitle={setTitle} />

              <div className="flex items-center justify-center gap-1">
                <p className="text-custom-primary">{author}</p>
                <p className="text-gray-500">/ {published}</p>
              </div>
            </div>
          </section>

          <ShortDiscriptionSection
            short_discription={short_discription}
            setShort_discription={setShort_discription}
          />

          <LongDiscriptionSection
            rawQuillValue={rawQuillValue}
            setRawQuillValue={setRawQuillValue}
            long_discription={long_discription}
            setLong_discription={setLong_discription}
            word_count={word_count}
            setWord_count={setWord_count}
          />

          <div className="container text-center">
            <button type="submit" className="primaryButton activePrimaryButton">
              Update
            </button>
          </div>
        </form>
      )}
    </main>
  );
};

export default UpdateBlog;
