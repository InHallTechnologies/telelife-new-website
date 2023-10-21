"use client";
import React from "react";
import Styles from './Blogs.module.css';
import SectionTitle from "../SectionTitle/SectionTitle.component";
import { onValue, ref } from "firebase/database";
import { firebaseDatabase } from "@/backend/firebaseHandler";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";


const Blogs = async () => {
    const router = useRouter();
    const blogsRef = ref(firebaseDatabase, `/BLOGS_ARCHIVE`);
    const BlogsPromose = new Promise((resolve, reject) => {
        onValue(blogsRef, dataSnapshot => {
            const data = Object.values(dataSnapshot.val());
            resolve(data)
        }, { onlyOnce: true });
    })
    const data = [...await BlogsPromose.then()]


    return (
        <div className={Styles.blogsContainer}>
            <SectionTitle
                title="Blogs"
                subTitle="Read more!"
            />

            <div className={Styles.blogsListContainer}>
                {
                    data.map(item => {
                        return (
                            <div onClick={_ => router.push(item.slug)} className={Styles.blogContentContainer} key={item.key}>
                                <img className={Styles.itemBlogImage} src={item.blogImage} />
                                <Typography sx={{ marginTop: 2 }} variant='h5'>{item.blogTitle}</Typography>
                                <Typography sx={{ marginTop: 1 }}>{item.subContent}</Typography>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs;