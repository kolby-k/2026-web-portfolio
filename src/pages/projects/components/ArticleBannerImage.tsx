import styles from "../project.module.css";

type ArticleBannerImageProps = {
  projectId: string;
};
function ArticleBannerImage({ projectId }: ArticleBannerImageProps) {
  return (
    <div className={styles.bannerImage}>
      TODO.. render image based on project id: {projectId}
    </div>
  );
}

export default ArticleBannerImage;
