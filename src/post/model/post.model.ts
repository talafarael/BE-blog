export interface PostModel {
  id: string;
  userId: string;
  imgUrl?: string | null;
  titleEn?: string | null;
  titleUa: string;
  contentEn?: string | null;
  contentUa: string;
}
