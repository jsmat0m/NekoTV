import { Link } from "react-router-dom";
import useGenresStore from "../store/genresStore";

const Genres = ({ event, className = "" }) => {
  const genres = useGenresStore((state) => state.genres);

  const colors = [
    "#d0e6a5",
    "#ffbade",
    "#fc887b",
    "#ccabda",
    "#abccd8",
    "#d8b2ab",
    "#86e3ce",
  ];

  return (
    <>
      <style>{`
        /* Genres hover uses site --secondary color */
        .genres li a {
          transition: color 160ms ease;
        }

        /* on hover (and focus for accessibility) */
        .genres li a:hover,
        .genres li a:focus {
          color: var(--secondary);
          text-decoration: none;
        }
      `}</style>

      <ul className={`flex flex-wrap genres`}>
        {genres.map((genre, index) => (
          <li
            style={{ color: colors[index % colors.length] }}
            className={`${className} px-2 py-1`}
            key={genre}
            title={genre}
          >
            <Link onClick={event} to={`/animes/genre/${genre}`}>
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
