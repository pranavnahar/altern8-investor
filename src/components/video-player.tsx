import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const videoUrl = "https://res.cloudinary.com/dd3iu14f6/video/upload/v1741941575/cloudinary_final_export_d3tswk.mov";
  const thumbnail = "https://res.cloudinary.com/dd3iu14f6/image/upload/c_thumb,w_200,g_face/v1741941818/cloudinary_final_export-Cover_bvew9m.jpg";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
          videoRef.current!.muted = true;
          videoRef.current?.play().catch(e => console.log("Still can't play:", e));
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleProgressBarClick = (e: MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressBarClick(e);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleProgressBarClick(e as unknown as MouseEvent<HTMLDivElement>);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    
    document.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-auto object-cover"
        controls={false}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div 
          ref={progressBarRef}
          className="w-full h-1 bg-gray-700/50 rounded-full cursor-pointer"
          onClick={handleProgressBarClick}
          onMouseDown={handleMouseDown}
        >
          <div 
            className="h-full bg-gray-500 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            {isHovered && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full shadow-sm"></div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
