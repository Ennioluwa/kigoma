import React from 'react'

const Message = () => {
  return (
    <div className=" container mx-auto mt-20 grid grid-cols-1 gap-20 p-5 sm:p-10 md:grid-cols-2">
      <div className=" col-span-1 mx-auto flex max-w-xl flex-col items-start justify-center gap-8">
        <h3 className=" mb-5 text-4xl font-semibold text-black">
          A message from the manager
        </h3>
        <p>
          Kigama sits in a unique position of being able to offer our guests the
          very best of Africa, from generous hospitality and refined service to
          exceptional experiences and the most beautiful African animals in
          existence
        </p>
        <p>
          Everyday, we aim to fulfill our purpose. "We love what we do, We
          believe in changing people's lives and finding our own vlue in their
          experience."
        </p>
        <p>
          Allow the Kigoma family to curate your visit to our beautiful grounds
        </p>
        <h5 className=" text-xl font-semibold">Arowo Enioluwa</h5>
      </div>
      <div className=" col-span-1 mx-auto flex max-w-xl items-center justify-center">
        <img
          src="/pic3.jpg"
          alt="arowo enioluwa"
          className=" h-64 w-64 rounded-full"
        />
      </div>
    </div>
  )
}

export default Message
