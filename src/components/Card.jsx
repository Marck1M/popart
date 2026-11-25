import { Link } from "react-router-dom";

export default function Card({ variante = "artista", datos }) {
  if (variante === "artista") {
    return (
      <div
        className={`${datos.cardBg} border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2`}
      >
        <span
          className={`self-start px-2 py-0.5 ${datos.badgeBg} font-black text-[10px] uppercase`}
        >
          {datos.horario}
        </span>
        <h3 className="font-black text-lg md:text-2xl uppercase">{datos.nombre}</h3>
        <p className="text-xs font-bold">{datos.descripcion}</p>
      </div>
    );
  }

  if (variante === "zona") {
    return (
      <div
        className={`${datos.cardBg} border-4 border-black p-3 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-3`}
      >
        <div
          className={`relative border-2 border-black h-48 overflow-hidden ${datos.marcoBg} flex items-center justify-center`}
        >
          {datos.tipo === "comic" ? (
            <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
              <polygon
                points="60,5 74,36 108,22 90,52 116,70 84,82 96,112 64,96 48,116 38,88 8,98 24,68 4,50 36,38 24,10 52,26"
                fill="#FF0055"
                stroke="#000"
                strokeWidth="5"
              />
              <text
                x="60"
                y="66"
                textAnchor="middle"
                fill="#FFE600"
                fontWeight="900"
                fontSize="20"
                fontFamily="sans-serif"
              >
                POW!
              </text>
            </svg>
          ) : (
            <img
              src={datos.imagen}
              alt={datos.alt}
              className="w-full h-full object-cover"
            />
          )}
          <span
            className={`absolute top-2 left-2 ${datos.zonaBg} border-2 border-black px-2 py-0.5 font-black text-xs uppercase`}
          >
            {datos.zona}
          </span>
        </div>
        <h3 className="font-black text-lg uppercase">{datos.titulo}</h3>
        <p className={`text-xs font-bold ${datos.textoBg}`}>{datos.descripcion}</p>
      </div>
    );
  }

  return (
    <div
      className={`${datos.cardBg} border-4 border-black p-5 ${
        datos.destacado
          ? "shadow-[8px_8px_0px_0px_#000] md:-translate-y-2"
          : "shadow-[6px_6px_0px_0px_#000]"
      } flex flex-col justify-between gap-4 relative`}
    >
      {datos.destacado && (
        <span className="absolute -top-4 -right-3 px-3 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-xs uppercase rotate-6 shadow-[3px_3px_0px_0px_#000]">
          TOP!
        </span>
      )}
      <div>
        <span
          className={`px-2.5 py-0.5 ${datos.badgeBg} border-2 border-black font-black text-xs uppercase`}
        >
          {datos.nombre}
        </span>
        <div className="mt-3 text-4xl font-black">{datos.precio}</div>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
          {datos.beneficios.map((beneficio, index) => (
            <li key={index}>★ {beneficio}</li>
          ))}
        </ul>
      </div>
      <Link
        to="/club"
        className={`w-full py-2.5 ${datos.botonBg} border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] transition-colors`}
      >
        {datos.botonTexto}
      </Link>
    </div>
  );
}