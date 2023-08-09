import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notionSecret = process.env.NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_ID_FORM_MESSAGE;

const notion = new Client({
  auth: notionSecret,
});

/* export async function GET() {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or database id");

  const query = await notion.databases.retrieve({
    database_id: notionDatabaseId,
  });
  //* console.log(query);

  return NextResponse.json(query);
} */

export async function POST(request: NextRequest) {
  //* const { name } = await request.json();
  const { name, phone_number, msg } = await request.json();
  try {
    await notion.pages.create({
      parent: {
        database_id: `${notionDatabaseId}`,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${name}`,
              },
            },
          ],
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: `${phone_number}`,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: `${msg}`,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "Belum",
            color: "red",
          },
        },
      },
    });
    //* console.log(query);

    return NextResponse.json({ message: "This Worked", success: true });
    //* return NextResponse.json(query);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false });
  }
}
