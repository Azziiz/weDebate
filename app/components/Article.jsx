import React from 'react'

function Article() {
  return (
      
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 my-4 w-max mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Title of the Article</h1>
      <p className="max-w-prose text-base  mb-8 self-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
        libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
        porta.
      </p>
      <div className="max-w-prose text-lg mb-4">
        <p>
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
          Sed dignissim lacinia nunc.
        </p>
        <p>
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi
          lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
          lacinia aliquet.
        </p>
      </div>
      <p className=" text-lg self-end">Written by: John Doe</p>
    </div>
  )
}

export default Article