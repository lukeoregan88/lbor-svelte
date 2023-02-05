/** @format */

import { error } from "@sveltejs/kit";

export const load = async ({ fetch, params: { slug } }) => {
  const res = await fetch(
    `https://blog.lbor.co.uk/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = await res.json();

  if (!post.length) {
    throw error(404, {
      message: "Not found",
    });
  }

  return { post };
};
