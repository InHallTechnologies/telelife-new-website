import { firebaseDatabase } from "@/backend/firebaseHandler";
import { onValue, ref } from "firebase/database";

const fetchBlogs = async (slug) => {

    const blogPromise = new Promise((resolve, reject) => {
        const blogRef = ref(firebaseDatabase, `BLOGS_ARCHIVE/${slug}`);
        onValue(blogRef, (dataSnapshot) => {
            if (dataSnapshot.exists()) {
                const blog = dataSnapshot.val();
                if (blog.status === "LIVE") {
                    resolve(blog);
                }else {
                    reject();
                }
               
            } else {
                reject();
            }
        })
    })

    return (await blogPromise.then());
}


export default fetchBlogs;