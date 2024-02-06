"use client";

import { useState, ReactNode } from "react";
import styles from "./ls.module.css";
import { usePathname } from "next/navigation";

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingComponent: React.FC = () => (
  <div className={styles.ld}>
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  </div>
);

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  setTimeout(() => {
    setIsLoading(false);
  }, 300);

  if (pathname === "/") {
    return isLoading ? <LoadingComponent /> : children;
  } else {
    return children;
  }
};
