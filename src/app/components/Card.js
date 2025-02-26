const Card = ({ title, value }) => {
    return (
      <div className="p-6 bg-white rounded-md shadow-md">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    );
  };
  
  export default Card;
  