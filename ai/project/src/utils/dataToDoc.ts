import { Document } from "@langchain/core/documents";
import {docToString} from "./docToString";

export function dataToDoc(raw: any): Document {
    return new Document({
        pageContent: docToString(raw),
        metadata: {
            id: raw.id,
            type: raw.type ?? "unknown",
        },
    });
}
