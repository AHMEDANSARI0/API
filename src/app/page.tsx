// import React from 'react'
// import ParentComponent from './components/ParentComponent'

// export default function Home() {
//     return (
//       <>
//         <ParentComponent />
//          </>
//     );
//   }

export default async function Home() {

    // Making API request
    const url = await fetch("https://simple-books-api.glitch.me/books")
    const res = await url.json()
    console.log(res)
  
    return (
      <main>
       {
        res.map((book: any) =>(
          <div>
            {/* 5 */}
            <link href={`${book.id}`} />
              <h1 className="text-7xl">
                  {book.name} &nbsp; &nbsp; {book.id}
              </h1>
          </div>
        ))
      }
      </main>
    );
  }