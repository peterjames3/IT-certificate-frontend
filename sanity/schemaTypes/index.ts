import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { AWSExamsServicePageType } from "./awsexamsType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { HeroType } from "./heroType";
import { FaqSectionType } from "./faqSectionType";
import { ChallengesSectionType } from "./challengesSectionType";
import { CompTIAExamsServicePageType } from "./comptiaexamsType";
import { compTIAFocusedSchemaTypes } from "./compTIAFocusedSectionType";
import { sectionType } from "./sectionType";
import { awsFocusedSchemaTypes } from "./AwsFocusedSectionType";
import { certOverviewSectionType } from "./certOverviewSectionType";
import { ContentSectionWithImageType } from "./contentSectionWithImageType";
import { ISACAExamsServicePageType } from "./isacaexamsType";
import { isacaFocusedSchemaTypes } from "./IsacaFocusedSectionType";
import { ISACAExamType } from "./isacaExamType";
import { ECCouncilServicePageType } from "./eccouncilexamsType";
import { eccouncilFocusedSchemaTypes } from "./eccouncilFocusedSectionType";
import { ECCouncilExamType } from "./eccouncilExamType";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    // ── CompTIA ──
    ...compTIAFocusedSchemaTypes,
    CompTIAExamsServicePageType,
    // ── AWS ──
    ...awsFocusedSchemaTypes,
    AWSExamsServicePageType,
    // ── ISACA ──
    ...isacaFocusedSchemaTypes,
    ISACAExamsServicePageType,
    ISACAExamType,
     // ── EC-Council ──
    ...eccouncilFocusedSchemaTypes,
    ECCouncilServicePageType,
    ECCouncilExamType,
    // ── Shared / Common ──
    certOverviewSectionType,
    ContentSectionWithImageType,
    FaqSectionType,
    ChallengesSectionType,
    HeroType,
  ],
};