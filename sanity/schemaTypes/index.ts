import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { HeroType } from "./heroType";
import { FaqSectionType } from "./faqSectionType";
import { ChallengesSectionType } from "./challengesSectionType";
import { CompTIAExamsServicePageType } from "./comptiaexamsType";
import { compTIAFocusedSchemaTypes } from "./compTIAFocusedSectionType";
import { sectionType } from "./sectionType";
import { certOverviewSectionType}  from "./certOverviewSectionType";
import { ContentSectionWithImageType } from "./contentSectionWithImageType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    ...compTIAFocusedSchemaTypes,
    CompTIAExamsServicePageType,
    certOverviewSectionType,
    ContentSectionWithImageType,
    FaqSectionType,
    ChallengesSectionType,
    HeroType,
  ],
};
