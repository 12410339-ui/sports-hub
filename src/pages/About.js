import React from "react";

function About() {

  return (

    <div className="page">

      <h1>Sports Comparison</h1>

      <hr />

      <p>
        This page compares some of the most popular sports based on different criteria,
        including popularity, major organizations, and famous athletes.
      </p>

      <h2>Understanding Sports Popularity</h2>

      <p>
        Sports popularity varies across different regions and cultures.
        Some sports, like football, have a global audience and are followed
        by millions of fans worldwide. Others, such as basketball and mixed
        martial arts, have grown significantly in recent years due to media
        coverage and international competitions.
      </p>

      <p>
        Organizations such as FIFA, NBA, and UFC play a major role in promoting
        their respective sports and organizing major events. These organizations
        help increase the visibility and competitiveness of each sport.
      </p>

      <img
        src="https://picsum.photos/700/300"
        alt="sports image"
      />

      <br />

      <h2>Comparison Table</h2>

      <br />

      <table border="1">

        <tr>
          <th>Sport</th>
          <th>Popularity</th>
          <th>Main Organization</th>
          <th>Famous Player</th>
        </tr>

        <tr>
          <td>Football</td>
          <td>Very High</td>

          <td>
            FIFA
            <a href="https://www.google.com/search?q=FIFA" target="_blank">
              🔍
            </a>
          </td>

          <td>
            Messi
            <a href="https://www.google.com/search?q=Messi" target="_blank">
              🔍
            </a>
          </td>
        </tr>

        <tr>
          <td>Basketball</td>
          <td>High</td>

          <td>
            NBA
            <a href="https://www.google.com/search?q=NBA" target="_blank">
              🔍
            </a>
          </td>

          <td>
            LeBron James
            <a href="https://www.google.com/search?q=LeBron+James" target="_blank">
              🔍
            </a>
          </td>
        </tr>

        <tr>
          <td>MMA</td>
          <td>Growing</td>

          <td>
            UFC
            <a href="https://www.google.com/search?q=UFC" target="_blank">
              🔍
            </a>
          </td>

          <td>
            Khabib
            <a href="https://www.google.com/search?q=Khabib" target="_blank">
              🔍
            </a>
          </td>
        </tr>

      </table>

      <br />

      <h2>Analysis of the Comparison</h2>

      <p>
        From the comparison above, football stands out as the most popular sport
        globally due to its accessibility and long history. Basketball maintains
        strong popularity, especially in the United States, while MMA continues
        to grow rapidly because of its dynamic and competitive nature.
      </p>

      <p>
        Each sport offers a unique experience, whether through teamwork or
        individual performance, making them appealing to different audiences.
      </p>

      <br />

      <h2>Key Differences</h2>

      <ul>
        <li>Football and basketball are team-based sports, while MMA is individual.</li>
        <li>Each sport has different rules, styles, and global audiences.</li>
        <li>Organizations like FIFA, NBA, and UFC control competitions worldwide.</li>
      </ul>

      <hr />

      <p>
        Use the search icons (🔍) to explore more about each player or organization.
      </p>

    </div>

  );

}

export default About;