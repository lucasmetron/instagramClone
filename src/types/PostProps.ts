import { CommentProps } from "./CommetProps";

export interface PostProps {
  id: number;
  nickname: string;
  email: string;
  image: string;
  coments: CommentProps[];
}
