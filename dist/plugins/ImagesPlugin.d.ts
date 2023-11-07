/// <reference types="react" />
import { LexicalCommand } from "lexical";
import { ImagePayload } from "../nodes/ImageNode";
export declare type InsertImagePayload = Readonly<ImagePayload>;
export declare const INSERT_IMAGE_COMMAND: LexicalCommand<InsertImagePayload>;
export default function ImagesPlugin({ captionsEnabled }: {
    captionsEnabled?: boolean;
}): JSX.Element | null;
