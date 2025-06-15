type MetaContentProps = {
  title: string;
  description: string;
};

export const MetaContent = ({ title, description }: MetaContentProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </>
  );
};
