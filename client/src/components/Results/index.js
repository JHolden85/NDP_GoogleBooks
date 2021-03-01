import React from 'react';
import Book from "../Book";

const Results = () => {
  const books = [
    {
      title: "Ender's Game",
      subtitle: "",
      author: "Orson Scott Card",
      image: "http://books.google.com/books/content?id=jaM7DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      description: "Winner of the Hugo and Nebula Awards In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew \"Ender\" Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut—young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training. Ender's skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister. Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender's two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives. Ender's Game is the winner of the 1985 Nebula Award for Best Novel and the 1986 Hugo Award for Best Novel. THE ENDER UNIVERSE Ender series Ender’s Game / Ender in Exile / Speaker for the Dead / Xenocide / Children of the Mind Ender’s Shadow series Ender’s Shadow / Shadow of the Hegemon / Shadow Puppets / Shadow of the Giant / Shadows in Flight Children of the Fleet The First Formic War (with Aaron Johnston) Earth Unaware / Earth Afire / Earth Awakens The Second Formic War (with Aaron Johnston) The Swarm /The Hive Ender novellas A War of Gifts /First Meetings At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied."

    }
  ];

  return (
    <div className="my-4 p-4 border border-black">
      {/* Title */}
      <h1>Results</h1>
      
      {/* Results box */}
      <div className="my-4 p-4 border border-black">
        {/* Render the book components */}
        <Book {...books[0]}/>
        <Book/>
      </div>
    </div>
  );
};

export default Results;