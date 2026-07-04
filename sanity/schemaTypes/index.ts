import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { HeroType } from "./heroType";
import { FaqSectionType } from "./faqSectionType";
import { ChallengesSectionType } from "./challengesSectionType";
import { CompTIAExamsServicePageType } from "./comptiaexamsType";
import { sectionType } from "./sectionType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    CompTIAExamsServicePageType,
    FaqSectionType,
    ChallengesSectionType,
    HeroType,
  ],
};
