'use client';

import { analytics } from '@/lib/analytics';

interface TrackedDownloadLinkProps {
  href: string;
  fileName: string;
  fileType?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TrackedDownloadLink({
  href,
  fileName,
  fileType = 'pdf',
  children,
  className = '',
}: TrackedDownloadLinkProps) {
  const handleClick = () => {
    // Track the download
    analytics.trackDownload(fileName, fileType);
  };

  return (
    <a
      href={href}
      download
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}