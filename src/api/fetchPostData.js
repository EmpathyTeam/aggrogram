import useSupabase from "../config/supabaseConfig.js";

const supabase = useSupabase();

/** post 전체 조회 */
export const getPosts = async () => {
  return await supabase.from("posts").select();
};

/** post 상세 조회 */

/** post 등록 */
export const uploadPost = async (post) => {};

/** post 수정 */

/** post 삭제 */
