type InfoRowProps = {
  label: string;
  value: string;
  isBold?: boolean;
};

const FightDetails = ({
  title,
  data,
}: {
  title?: string;
  data: { label: string; value: string; isBold?: boolean }[];
}) => {
  return (
    <div className="flex flex-col">
      {/* Fight Info Section */}
      {title && (
        <div className="bg-green text-white text-lg font-semibold p-3 rounded-t-lg text-center">
          {title}
        </div>
      )}
      <div className="rounded-b-lg overflow-hidden mb-8">
        {data.map((item, index) => (
          <InfoRow
            key={index}
            label={item.label}
            value={item.value}
            isBold={item.isBold}
          />
        ))}
      </div>
    </div>
  );
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value, isBold }) => {
  return (
    <div className="grid grid-cols-2  px-16 py-2 bg-gray even:bg-white">
      <span className="font-semibold capitalize">{label}</span>
      <span className={isBold ? "font-semibold" : ""}>{value}</span>
    </div>
  );
};

export default FightDetails;
