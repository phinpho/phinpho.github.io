export type AvatarProps = {
  src: string;
};

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <img
      src={src}
      alt="Avatar"
      className="h-full w-full b-1 rounded-full b-solid object-cover dark:b-light light:b-dark"
    />
  );
};
