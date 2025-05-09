import Feavorite from "../Feavorite/Feavorite.jsx";
import Psychologists from "../Psychologists/Psychologists.jsx";

export default function HomePage() {
  return (
    <>
      <div>
        {/* <div class="logo">
          <strong style="color: #306eff">psychologists</strong>.services
        </div> */}
        <nav>
          <a href={<HomePage />}>
            <span>psychologists.</span>
            <span>services</span>
          </a>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="/homePage">Home</a>
            </li>
            <li>
              <a href="/psychologists">Psychologists</a>
            </li>
            <li>
              <a href="/feavorite">Feavorite</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
          </ul>
        </nav>
      </div>
      <h1>The road to the depths of the human soul</h1>
      <p>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
    </>
  );
}
