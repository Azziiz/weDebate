// components/Article.js
import Image from "next/image";


function Article({ name, title, intro }) {

    return (
    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-third shadow-lg rounded-lg p-8 pb-2 m-2 mb-5 flex flex-col hover:scale-105  transition-all cursor-pointer ">
      {/* Pin icon in the top right corner */}

      {/* Avatar and User Name in the top left corner */}
      <div className="flex items-center mb-2">
        <h2 className="font-bold text-lg ">{title}</h2>
      </div>

      {/* Title in the top center */}

      {/* Text content in the middle */}
      <div>
        <p className="text-sm  text-justify mb-4">{intro}</p>
      </div>

      <div className="self-end mb-2 flex items-center">
        <p className="font-normal text-xs uppercase ">{name}</p>
      </div>
    </div>
  );
}

export default Article;
