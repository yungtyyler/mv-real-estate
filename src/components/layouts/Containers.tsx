export const MaxWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`max-w-[1200px] mx-auto px-6 ${className ? className : ''}`}>{children}</div>;
};

export const MaxWidthPage = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`max-w-[1200px] mx-auto w-full md:my-[3rem] my-[2.2rem] px-6 ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export const FullWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`w-full ${className ? className : ''}`}>{children}</div>;
};

export const ContentWidth = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`relative ${className ? className : ''}`}>{children}</div>;
};
