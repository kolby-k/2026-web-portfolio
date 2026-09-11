import { proper } from "../utils";

type TagProps = {
  title: string;
  variant?: "default" | "primary" | "secondary" | "theme";
  size?: "sm" | "base" | "md" | "lg";
};
function Tag({ title, variant = "default", size = "base" }: TagProps) {
  return (
    <div
      className={`
        custom_tag 
        custom_tag_${variant} 
        custom_tag_${size}`}
    >
      {proper(title)}
    </div>
  );
}

export default Tag;
