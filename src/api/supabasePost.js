import { supabase } from "../configs/supabaseConfig";

/** post 등록 */
export const uploadPost = async (post) => {
  return await supabase.from("posts").insert({
    user_id: post.userId,
    nickname: post.nickname,
    title: post.title,
    img_url: post.imageUrl,
    context: post.content,
    avatar_url: post.avatar_url
      ? post.avatar_url
      : "https://untacqjpmvnegdbefbrr.supabase.co/storage/v1/object/public/avatarImg/m_20220509173224_d9N4ZGtBVR.jpeg"
  });
};

/** post 수정 */
export const updatePost = async (post) => {
  return await supabase
    .from("posts")
    .update({
      title: post.title,
      context: post.content,
      img_url: post.imageUrl,
      avatar_url: post.avatar_url
        ? post.avatar_url
        : "https://untacqjpmvnegdbefbrr.supabase.co/storage/v1/object/public/avatarImg/m_20220509173224_d9N4ZGtBVR.jpeg"
    })
    .eq("id", post.id)
    .select();
};
