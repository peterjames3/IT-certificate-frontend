import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { FaqSectionType } from "./faqSectionType";
import { ChallengesSectionType } from "./challengesSectionType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    FaqSectionType,
    ChallengesSectionType,

  ],
}
