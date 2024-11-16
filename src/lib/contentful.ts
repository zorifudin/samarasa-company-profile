import { createClient, FieldsType } from "contentful";
import { cache } from "react";

interface ResponseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
  try {
    const response = await client.getEntries({
      content_type: "website",
    });

    const websites = response.items.map((website: ResponseEntry) => {
      return {
        entryId: website.sys.id,
        title: website.fields.title,
        description: website.fields.description,
        thumbnail: "https:" + website.fields.thumbnail.fields.file.url,
        category: website.fields.category,
        content: website.fields.content,
      };
    });

    return websites;
  } catch (error) {
    console.log(error);
  }
};

export const getEntry = cache(async (entryId: string) => {
  try {
    const response: ResponseEntry = await client.getEntry(entryId);

    return {
      entryId: response.sys.id,
      title: response.fields.title,
      description: response.fields.description,
      thumbnail: "https:" + response.fields.thumbnail.fields.file.url,
      category: response.fields.category,
      content: response.fields.content,
    };
  } catch (error) {
    console.log(error);
  }
});
