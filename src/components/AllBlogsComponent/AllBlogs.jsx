import { Helmet } from "react-helmet-async";
import BlogsSection from "./BlogsSection";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";

const AllBlogs = () => {
    const headerTitle = "Our Latest BLogs";
    const headerSubTitle = "Read & Learn";
    return (
        <main className='space-y-10'>
            <Helmet>
                <title>All Blogs | MORE BLOGS</title>
            </Helmet>
            <CommonHeroSection
                headerTitle={headerTitle}
                headerSubTitle={headerSubTitle}
            />
            <BlogsSection />

        </main>
    );
};

export default AllBlogs;