import { useRef, useState } from "react";
import styles from "../styles/expandableImage.module.css";
import Button from "./Button";

type ExpandableImageProps = {
  src: string;
  title: string;
  alt?: string;
  description?: string;
};

function ExpandableImage({
  src,
  title,
  alt,
  description,
}: ExpandableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className={styles.expandableImageContainer}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => dialogRef.current?.showModal()}
          aria-label="View full image"
          aria-haspopup="dialog"
        >
          <img src={src} alt={alt} className={styles.expandableImage} />
        </button>
      </figure>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label={`${title} — full image`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsZoomed(false);
            dialogRef.current?.close();
          }
        }}
        onClose={() => setIsZoomed(false)}
      >
        <span className={styles.closeButton}>
          <Button
            handleClick={() => dialogRef.current?.close()}
            title="Close"
            variant="Brand"
          />
        </span>
        <figure className={styles.expandedFigure}>
          <figcaption className={styles.imageTitle}>
            <p className="sub-heading">{title}</p>
          </figcaption>

          <div
            className={styles.imageViewport}
            data-zoomed={isZoomed}
            tabIndex={0}
            role="region"
            aria-label="Image viewing area"
          >
            <div className={styles.imageCanvas}>
              <img
                src={src}
                alt={alt ?? title}
                className={styles.fullImage}
                draggable={false}
              />

              <button
                type="button"
                className={styles.zoomToggle}
                onClick={() => setIsZoomed((zoomed) => !zoomed)}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                aria-pressed={isZoomed}
              />
            </div>
          </div>

          {description && (
            <figcaption className={styles.imageDescription}>
              <p className="font-base">{description}</p>
            </figcaption>
          )}
        </figure>
      </dialog>
    </>
  );
}

export default ExpandableImage;
