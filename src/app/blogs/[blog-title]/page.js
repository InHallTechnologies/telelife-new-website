import React from "react";
import Styles from './Blogs.module.css';
import fetchBlogs from "@/app/utilities/fetchBlog";
import NormalNav from "@/app/NormalNav/NormalNav.component";
import FooterSection from "@/app/components/Footer/Footer.component";

const Blog = async ({ params }) => {

    const blogSlug = params["blog-title"];
    const blog = await fetchBlogs(blogSlug);


    return (
        <div >
            <title>{blog.blogTitle} | Telelife Medicare</title>
            <div className={Styles.blogsContainer}>

                <NormalNav Styles={Styles} />

                <div className={Styles.blogMainContainer}>
                    <div className={Styles.blogsContentContainer}>
                        <div className={Styles.selectedBlogArea}>
                            <h1 className={Styles.blogTitle}>{blog.blogTitle}</h1>
                            <p>By: {blog.blogAuthor}</p>

                            <img src={blog.blogImage} className={Styles.blogImage} />

                            <div className={Styles.blogContent}  >
                                {

                                    JSON.parse(blog.blogContent).blocks.map(item => {
                                        switch (item.type) {
                                            case "paragraph": {
                                                return <p dangerouslySetInnerHTML={{ __html: item.data.text }}></p>
                                            }

                                            case "header": {
                                                return <h2 dangerouslySetInnerHTML={{ __html: item.data.text }}></h2>
                                            }

                                            case "list": {
                                                return (
                                                    <ul>
                                                        {
                                                            item.data.items.map(item => {
                                                                return <li key={item} dangerouslySetInnerHTML={{ __html: item }}></li>
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>

                        <div className={Styles.moreBlogArea}>

                        </div>
                    </div>

                </div>

            </div>
            <FooterSection />
        </div>
    )
}



// export async function getServerSideProps(context) {


//     return {
//         props: {
//             blog
//         }
//     }
// }


export default Blog;