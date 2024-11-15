
interface CardProps {
  name: string;
  nameEng?: string | null;
  info?: string | null;
  tagLevel?: React.ReactNode;
  tagSpeed?: React.ReactNode;
  tagLight?: React.ReactNode;
  tagWater?: React.ReactNode;
  imageSrc: string;
  altMessage: string;
}

export default function Cards({
  name,
  nameEng,
  info,
  tagLevel,
  tagSpeed,
  tagLight,
  tagWater,
  imageSrc,
  altMessage,
}: CardProps) {
  
  return (
    <div className="card-container">
      <div className="flex flex-row mb-[2%] mt-[4%]">
        {tagLevel && (
          <button className="tag group">{tagLevel}</button>
        )}
        {tagSpeed && (
          <button className="tag group">{tagSpeed}</button>
        )}
        {tagLight && (
          <button className="tag group">{tagLight}</button>
        )}
        {tagWater && (
          <button className="tag group">{tagWater}</button>
        )}
      </div>

      <h2 className="h2 mb-[1%] mt-[3%]">{name}</h2>
      <h3 className="h3 mb-[1%]">{nameEng}</h3>
      <h4 className="h4 my-[3%]">{info}</h4>
      <img src={imageSrc} alt={altMessage} className="card-image" />
    </div>
  );
}
