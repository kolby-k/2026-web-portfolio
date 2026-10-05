import styles from "../project.module.css";

type ArticleExpandableImageProps = {
  projectId: string;
};
function ArticleExpandableImage({ projectId }: ArticleExpandableImageProps) {
  return (
    <div className={styles.expandableImage}>
      TODO.. render image based on project id: {projectId}
    </div>
  );
}

export default ArticleExpandableImage;
