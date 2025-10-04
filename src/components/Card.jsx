import React from "react";

const Card = ({
  imageSrc,
  imageAlt = "Image",
  text = "Card Title",
  onClick = () => {},
  className = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={`w-60 md:w-50 lg:w-70 border p-3 md:p-3 lg:p-5 rounded-lg text-[rgba(115,115,115,1)] border-gray-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.10)] hover:bg-gray-100 hover:text-black/80 ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      <img src={imageSrc} alt={imageAlt} className="mx-auto" />
      <p className="flex justify-center mt-3 text-sm lg:text-lg text-center">
        {text}
      </p>
    </div>
  );
};

export default Card;
