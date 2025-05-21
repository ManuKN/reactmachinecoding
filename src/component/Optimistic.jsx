import { startTransition, useOptimistic } from "react";
import { useState } from "react";

async function updateLikeCount(postId, newLikes) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API delay
    console.log(`Updated Likes for Post ${postId}: ${newLikes}`);
}

function LikeButton({ postId, initialLikes }) {
    const [likes, setLikes] = useState(() => initialLikes);
    console.log("likes", likes, postId)

    // useOptimistic to update UI instantly
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (state, newLike) => state + newLike
    );

    async function handleLike() {
        // Optimistically update UI
        startTransition(() => addOptimisticLike(1));

        try {
            // Update likes on the server
            await updateLikeCount(postId, optimisticLikes + 1);
            // Sync state with server
            setLikes(optimisticLikes + 1);
        } catch (error) {
            console.error("Failed to update likes:", error);
            // Revert optimistic update in case of error
            addOptimisticLike(-1);
        }
    }

    return (
        <button onClick={handleLike}>
            ❤️ {optimisticLikes} Likes
        </button>
    );
}

export default LikeButton