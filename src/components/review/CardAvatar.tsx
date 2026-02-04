import { getAvatarImgUrl } from "@/utils/utils";
import { Avatar, AvatarProps } from "@mui/material";

interface Props extends AvatarProps {
  url: string | null;
  name: string;
}

const CardAvatar = ({ url, name, ...props }: Props) => {
  if (url == null) {
    return <Avatar {...props}>{name.charAt(0).toUpperCase()}</Avatar>;
  }
  return <Avatar alt={name} src={getAvatarImgUrl(url)} {...props} />;
};

export default CardAvatar;
