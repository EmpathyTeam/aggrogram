import { supabase } from "../configs/supabaseConfig";

/** post 전체 조회 */
export const getPosts = async () => {
  return await supabase.from("posts").select()  ;
};

/** post 등록 */
export const uploadPost = async (post) => {
  return await supabase.from("posts").insert({
    user_id: post.userId,
    nickname: post.nickname,
    title: post.title,
    img_url: post.imageUrl,
    context: post.content,
    avatar_url: post.avatar_url
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
    })
    .eq("id", post.id)
    .select();
};
