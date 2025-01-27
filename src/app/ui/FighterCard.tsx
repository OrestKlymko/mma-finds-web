import Image from "next/image";

function FighterCard() {
  const mock = {
    name: 'John "the punisher" Doe',
    class: "middleweight",
    professionalRecord: "10-5-2",
    amateurRecord: "5-2-1",
  };

  return (
    <div className="rounded-sm bg-gray flex gap-4 p-4 items-center">
      <div className="overflow-hidden rounded-full aspect-square w-[25%]">
        <Image
          className="h-full w-full aspect-square object-cover object-center"
          width={55}
          height={55}
          src="/images/boxer-avatar.jpg"
          alt="fighter"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="">{mock.name}</h4>
        <ul className="flex flex-col gap-0 text-sm">
          <li>
            <p className="font-semibold">
              Weight Class: <span className="font-normal">{mock.class}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Professional MMA Record:{" "}
              <span className="font-normal">{mock.professionalRecord}</span>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              Amateur MMA Record:{" "}
              <span className="font-normal">{mock.class}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FighterCard;
