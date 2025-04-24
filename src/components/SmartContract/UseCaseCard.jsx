const UseCaseCard = ({ image, title, description, bgColor }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-80 my-4">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className={`p-4 ${bgColor} text-white`}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default UseCaseCard;
  