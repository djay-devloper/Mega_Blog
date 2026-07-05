import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// if post variable provided then updatePost mode otherwise createPost mode
export default function PostForm({ post }) {
    const { register, handleSubmit, watch, control, getValues, setValue } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    
    // Fetch user data from Redux store
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        setIsSubmitting(true);
        setSubmitSuccess(false);
        const { image, ...postData } = data;
        const fileInput = image && image.length > 0 ? image[0] : null;

        try {
            if (post) {
                // Update Mode
                let featuredImage = post.featuredImage;

                if (fileInput) {
                    const uploadedFile = await appwriteService.uploadFile(fileInput);
                    if (uploadedFile) {
                        featuredImage = uploadedFile.$id;
                        if (post.featuredImage) {
                            await appwriteService.deleteFile(post.featuredImage);
                        }
                    }
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...postData,
                    featuredImage,
                });

                if (dbPost) {
                    setSubmitSuccess(true);
                    setTimeout(() => navigate(`/post/${dbPost.$id}`), 500);
                    return;
                }
            } else {
                // Create Mode
                if (!userData) {
                    console.error("Cannot create post: User is not authenticated or data is still loading.");
                    return;
                }

                let featuredImage;

                if (fileInput) {
                    const uploadedFile = await appwriteService.uploadFile(fileInput);
                    if (uploadedFile) {
                        featuredImage = uploadedFile.$id;
                    }
                }

                const dbPost = await appwriteService.createPost({
                    ...postData,
                    featuredImage,
                    userId: userData.$id,
                });

                if (dbPost) {
                    setSubmitSuccess(true);
                    setTimeout(() => navigate(`/post/${dbPost.$id}`), 500);
                    return;
                }
            }
        } catch (error) {
            console.error("Post submission failed:", error);
        } finally {
            if (!submitSuccess) {
                setIsSubmitting(false);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);
    
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                // Safely update slug based on title input
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button
                    type="submit"
                    bgColor={submitSuccess ? "bg-emerald-600" : post ? "bg-green-600" : "bg-slate-900"}
                    className={`w-full ${isSubmitting ? "opacity-80" : ""}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Publishing..." : submitSuccess ? "Published!" : post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}