import useSupabase from "../config/supabaseConfig.js";
import { getFormatDate } from "../utils/formatDate.js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const STORAGE_NAME = "board-images";

const supabase = useSupabase();

/** TODO 삭제) 테스트용 이미지 조회 */
export const getPostImage = (imageName) => {
  return supabase.storage.from("board-images").getPublicUrl(imageName);
};

/** 이미지 등록 */
export const uploadPostImage = async (uploadImage, userId) => {
  const fileName = `${userId}_${getFormatDate()}`;
  return await supabase.storage.from(STORAGE_NAME).upload(fileName, uploadImage);
};

export const getImageUrl = (fullPath) => {
  return `${SUPABASE_URL}/storage/v1/object/public/${fullPath}`;
};
