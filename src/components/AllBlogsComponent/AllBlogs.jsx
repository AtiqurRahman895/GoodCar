import { Helmet } from "react-helmet-async";
import BlogsSection from "./BlogsSection";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";

const AllBlogs = () => {
    const headerTitle = "Our Latest BLogs";
    const headerSubTitle = "Read & Learn";
    return (
        <main className='my-16'>
            <Helmet>
                <title>All Blogs | GOOD CAR</title>
            </Helmet>
            {/* <CommonHeroSection
                headerTitle={headerTitle}
                headerSubTitle={headerSubTitle}
            /> */}
            <BlogsSection />

        </main>
    );
};

export default AllBlogs;