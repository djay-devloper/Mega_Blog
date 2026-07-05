import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const authorId = post?.userId || post?.userid;
    const isAuthor = Boolean(post && userData && authorId === userData.$id);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!post?.$id) return;

        const status = await appwriteService.deletePost(post.$id);
        if (status && post.featuredImage) {
            await appwriteService.deleteFile(post.featuredImage);
        }
        navigate("/");
    };

    return post ? (
        <div className="py-8">
            <Container>
                {/* Image removed. Edit/Delete buttons repositioned for proper flow. */}
                {isAuthor && (
                    <div className="mb-4 flex w-full justify-end gap-3">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-slate-800" className="px-5 shadow-sm hover:bg-slate-700">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-rose-600" className="px-5 shadow-sm hover:bg-rose-700" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
                
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}