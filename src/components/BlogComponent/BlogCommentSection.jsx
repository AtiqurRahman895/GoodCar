import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../AuthenticationComponent/Loading";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useSecureAxios from "../../Hooks/useSecureAxios";
import useNormalAxios from "../../Hooks/useNormalAxios";

const BlogCommentSection = ({ blog_id, author_email }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const normalAxios = useNormalAxios();
  const secureAxios = useSecureAxios();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    const params = { query: { blog_id }, sort: { _id: 1 } };
    // setLoading(true);
    // console.log("its loading!");
    normalAxios
      .get("/comments", { params })
      .then((res) => {
        // console.log(res.data)
        if (res.data.length === 0) {
          setNotFound(true);
        } else {
          setComments(res.data);
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.error("Error finding comments:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  const handleCommentSubmin = (e) => {
    e.preventDefault();
    if (!user?.email && !user?.displayName) {
      toast.warning(
        "Currently you are not Logged in. Login first to comment on this Blog!"
      );
      navigate("/login");
      return;
    } else if (user?.email === author_email) {
      toast.info("You can't comment on your own blog!");
      return;
    }
    const comment = e.target.ReaderComment.value;
    const commenter = user.displayName;
    const commenter_email = user.email;
    const commenter_image = user.photoURL;

    const commentCredentials = {
      blog_id,
      commenter,
      commenter_image,
      commenter_email,
      comment,
    };

    setLoading(true);

    secureAxios
      .post("/addComment", commentCredentials)
      .then(() => {
        e.target.reset();
        toast.success("You have successfully added a Comment on this blog!");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
        toast.error(
          error.response?.data?.message || `Failed to add your comment!`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="space-y-6">
      {user?.email !== author_email && (
        <form onSubmit={handleCommentSubmin} className="container space-y-4">
          <div className="form-control w-full">
            <textarea
              placeholder="Write your Comment.."
              name="ReaderComment"
              id="ReaderComment"
              minLength={3}
              className="textarea textarea-ghost textarea-bordered h-24 !outline-none rounded-sm"
              required
            />
          </div>
          <button type="submit" className="primaryButton activePrimaryButton">
            Comment
          </button>
        </form>
      )}

      {loading ? (
        <Loading />
      ) : (
        <>
          {notFound ? (
            <div className="grid justify-items-center gap-3">
              <img src="./notFound.svg" alt="" className="w-[150px]" />
              <h4 className="font-extrabold text-center text-custom-primary">
                No one has commented on this blog yet!
              </h4>
            </div>
          ) : (
            <div className="container space-y-4 text-black">
              <h5 className="text-center">All Comments({comments.length})</h5>
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-custom-half-primary rounded-md p-4 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        comment.commenter_image
                          ? comment.commenter_image
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      className="w-[40px] h-[40px] rounded-full place-content-center"
                    />
                    <div className="gird gap-1">
                      <b className="">{comment.commenter}</b>
                      <p className="text-xs">{comment.commenter_email}</p>
                    </div>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BlogCommentSection;
