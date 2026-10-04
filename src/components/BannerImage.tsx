import { useRef, useState } from "react";
import styles from "../styles/bannerImage.module.css";
import Button from "./Button";

type BannerImageProps = {
  src: string;
  title: string;
  alt?: string;
  description?: string;
};

function BannerImage({ src, title, alt, description }: BannerImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className={styles.bannerImageContainer}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={() => dialogRef.current?.showModal()}
          aria-label="View full image"
          aria-haspopup="dialog"
        >
          <img src={src} alt={alt} className={styles.bannerImage} />
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

          <figcaption className={styles.caption}>
            <p className={`sub-heading ${styles.imageTitle}`}>{title}</p>

            {description && (
              <p className={`font-base ${styles.imageDescription}`}>
                {description}
              </p>
            )}
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}

export default BannerImage;
