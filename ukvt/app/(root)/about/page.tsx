import React from "react";

// const page = () => {
//   throw new Error("Ahh shizzer here we go again");
//   return <div>About</div>;
// };

async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols">
      {albums.map((album: { id: number; title: string }) => (
        <div
          key={album.id}
          className="bg-gray shadow-md rounded-lg p-4 transition t..."
        >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-grey-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
}

export default page;
