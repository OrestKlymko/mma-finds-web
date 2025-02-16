type IconInfoProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

function IconInfo({ title, description, Icon }: IconInfoProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center justify-center h-12 aspect-square p-3 bg-gray rounded-md">
        {<Icon className="h-full w-auto" />}
      </div>
      <span className="blok w-[2px] bg-gray self-stretch"></span>
      <div className="self-center">
        <h4>{title}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default IconInfo;
