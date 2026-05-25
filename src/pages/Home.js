import React from "react";
function Home() {

  return (

    <div className="page">

      <h1>Sports Hub</h1>

      <hr />

      <h2>About This Website</h2>

      <p>
        Sports Hub is a simple and informative website designed to explore the world of sports.
        It provides an overview of different sports categories, highlights famous athletes,
        and presents key information in a structured and clear way.
      </p>

      <p>
        The goal of this website is to give users an easy way to navigate through different
        sports topics and understand their importance, popularity, and impact around the world.
      </p>

      <img
        src="https://picsum.photos/700/300"
        alt="sports image"
      />

      <h2>Core Features</h2>

      <ul>
        <li>Explore different types of sports</li>
        <li>Learn about famous athletes</li>
        <li>View structured data using tables</li>
        <li>Interact through forms and navigation</li>
      </ul>

      <h2>Why Sports Are Important</h2>

      <p>
        Sports play a major role in building discipline, teamwork, and physical fitness.
        They also connect people from different cultures and create global events
        that bring excitement and competition.
      </p>

      <h2>Featured Sports</h2>

      <ol>
        <li>Football</li>
        <li>Basketball</li>
        <li>Mixed Martial Arts (MMA)</li>
      </ol>

      <hr />

      <p>
        Use the navigation above to explore more about sports and interact with the website.
      </p>

    </div>

  );

}

export default Home;