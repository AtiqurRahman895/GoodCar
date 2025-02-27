import Masonry from "react-responsive-masonry";
import useScreenWidth from "../../Hooks/useScreenWidth";
import { useEffect, useState } from "react";
import Loading from "../AuthenticationComponent/Loading";
import RecentBlogCard from "./RecentBlogCard";
import useNormalAxios from "../../Hooks/useNormalAxios";

const RecentBlogsSection = () => {
  const normalAxios = useNormalAxios();

  const screenWidth = useScreenWidth();
  const [columnsCount, setColumnsCount] = useState();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    if (screenWidth >= 1024) {
      setColumnsCount(3);
    } else if (screenWidth >= 640) {
      setColumnsCount(2);
    } else {
      setColumnsCount(1);
    }
  }, [screenWidth]);

  useEffect(() => {
    const params = { limit: 3, sort: { _id: -1 } };

    setLoading(true);

    normalAxios
      .get("/blogs", { params })
      .then((res) => {
        // console.log(res.data)
        res.data.length === 0 ? setNotFound(true) : setRecentBlogs(res.data);
      })
      .catch((error) => {
        console.error("Error finding blogs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container  space-y-12">
        <div className="text-center font-bold">
          <h6 className="text-custom-primary">Read & Learn</h6>
          <h2 className={`text-black`}>Our Latest blogs</h2>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            {notFound ? (
              <div className="grid justify-items-center gap-3">
                <img
                  src={"./notFound.svg"}
                  alt={`not available`}
                  className="w-[200px]"
                />
                <h3 className="font-extrabold text-center text-custom-primary">
                  Unable to find recent blogs!
                </h3>
              </div>
            ) : (
              <Masonry columnsCount={columnsCount} className="!gap-4 md:!gap-6">
                {recentBlogs.map((blog, index) => (
                  <RecentBlogCard key={index} blog={blog} />
                ))}
              </Masonry>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default RecentBlogsSection;
