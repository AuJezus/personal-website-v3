import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { links } from "@/lib/site";

export const runtime = "edge";

const robotoMonoMedium = fetch(
  new URL("../../../../assets/fonts/RobotoMono-Medium.ttf", import.meta.url),
).then((res) => res.arrayBuffer());
const robotoMonoRegular = fetch(
  new URL("../../../../assets/fonts/RobotoMono-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontRobotoMonoMedium = await robotoMonoMedium;
    const fontRobotoMonoRegular = await robotoMonoRegular;

    const { searchParams } = req.nextUrl;
    const type = searchParams.get("type");
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    if (!type) return new Response("No type provided", { status: 500 });

    if (type.length > 15)
      return new Response("Type param too long (max 15 character)", {
        status: 500,
      });

    if (!title) return new Response("No title provided", { status: 500 });

    // Limit title
    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="w-full h-full bg-[rgb(3,7,18)] p-20 flex text-[rgb(249,250,251)] flex-col justify-between">
          <div tw="text-2xl font-semibold flex">
            AUJEZUS <span tw="ml-2 text-[rgb(109,40,217)]">{type}_</span>
          </div>

          <div tw="flex flex-col">
            <div tw="mb-6 text-5xl font-semibold">{heading}</div>

            <div tw="text-xl">{description}</div>
          </div>

          <div tw="flex justify-around">
            <div tw="flex items-center">
              <svg
                fill="rgb(249,250,251)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
              </svg>

              <span tw="ml-2">aujezus.com</span>
            </div>

            <div tw="flex items-center">
              <svg
                fill="rgb(249,250,251)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>

              <span tw="ml-2">{links.github.replace("https://", "")}</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "RobotoMono",
            data: fontRobotoMonoMedium,
            style: "normal",
            weight: 600,
          },
          {
            name: "RobotoMono",
            data: fontRobotoMonoRegular,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
