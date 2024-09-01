import { supabase } from "../configs/supabaseConfig";

/** post 전체 조회 */
export const getPosts = async () => {
  return await supabase.from("posts").select();
};

/** post 등록 */
export const uploadPost = async (post) => {
  return await supabase.from("posts").insert({
    user_id: post.id,
    title: post.title,
    img_url: post.imageUrl,
    context: post.content,
    nickname: post.nickname
  });
};

/** post 수정 */
export const updatePost = async (post) => {
  console.log("post :>> ", post);

  return await supabase
    .from("posts")
    .update({
      title: post.title,
      context: post.content,
      img_url: post.imageUrl
    })
    .eq("id", post.id)
    .select();
};
