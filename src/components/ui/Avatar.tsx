import Image from "next/image";

function Avatar({ src }: { src: string }) {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden">
      <Image
        className="w-full h-full object-cover object-center"
        width={62}
        height={62}
        src={src}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
