import { buildSrc, buildSrcSet } from "@sanity-image/url-builder";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url

const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}`;

export function urlFor(
  id: string,
  width: number,
  height?:number
){
  return buildSrc({id, width, height, baseUrl})
}

export function urlForSrcSet(
  id: string,
  width: number,
  height?: number
){
  return buildSrcSet({id, width, height, baseUrl})
}

