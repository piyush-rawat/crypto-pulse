import clsx from "clsx";

const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={clsx(
        "text-3xl font-orbiton text-center py-10 bg-gradient-to-t from-color-1 to-color-6 text-transparent bg-clip-text",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Heading;
