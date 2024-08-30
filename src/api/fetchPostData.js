// import useSupabase from "../config/supabaseConfig.js";

import { supabase } from "../config/supabaseConfig";

// const supabase = useSupabase();

/** post 전체 조회 */
export const getPosts = async () => {
  return await supabase.from("posts").select();
};

/** post 상세 조회 */

/** post 등록 */
export const uploadPost = async (post) => {
  console.log("post :>> ", post);
  // const { error } = await supabase.from("posts").insert({
  //   user_id: post.id,
  //   title: post.title,
  //   img_url: post.imageUrl,
  //   context: post.content,
  //   nickname: post.nickname
  // });
};

/** post 수정 */

/** post 삭제 */
