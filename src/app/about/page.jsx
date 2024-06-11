import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">contact</Link>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
      laborum nemo voluptatum tempora laudantium, reprehenderit cumque.
      Accusantium, aperiam amet. Fugit voluptas debitis magnam beatae ad
      possimus vero nisi dicta aliquam quas iste deleniti aspernatur tempore, id
      hic ipsum eaque dolore eos quidem laboriosam tenetur doloribus, commodi ab
      aliquid! Quos, nemo.
    </div>
  );
};

export default page;
