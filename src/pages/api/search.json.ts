import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get("query");
  console.log(query);

  //handle fi queyr is not present
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "query param is missing",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const allBlogArticles: CollectionEntry<"blog">[] =
    await getCollection("blog");

  //filter article based on query
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch: boolean = article.data.title
      .toLowerCase()
      .includes(query!.toLowerCase());
    const bodyMatch: boolean = article.body
      .toLowerCase()
      .includes(query!.toLowerCase());
    const slugMatch: boolean = article.slug
      .toLowerCase()
      .includes(query!.toLowerCase());

    return titleMatch || bodyMatch || slugMatch;
  });

  // Return a successful response if query is present
  return new Response(
    JSON.stringify({
      searchResults,
      message: "Query received successfully",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
