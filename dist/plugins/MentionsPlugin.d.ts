/// <reference types="react" />
import './MentionsPlugin.css';
declare type SearchData<A> = (p: string) => Promise<A[]>;
export default function MentionsPlugin<A>(props: {
    searchData: SearchData<A>;
    getTypeaheadValues: (result: A) => {
        url: string;
        value: string;
        picture: JSX.Element;
    };
}): JSX.Element | null;
export {};
