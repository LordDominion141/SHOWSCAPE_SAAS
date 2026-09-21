import React from "react";
import { baseTags } from "@/schema/baseTags";
import Markdoc from "@markdoc/markdoc";

import { Heading } from "@/components/Heading";
import { Card } from "@/components/Card";
import { Stat } from "@/components/Stat";
import { Image } from "@/components/Image";
import { Columns } from "@/components/Columns";

const config = {
    tags: {
        ...baseTags,
    },
};

const MyRenderedPage = ({ markdown }) => {
    const ast = Markdoc.parse(markdown);
    const content = Markdoc.transform(ast, config);

    return (
        <main className="showscape-page">
            <article className="showscape-document">
                {Markdoc.renderers.react(content, React, {
                    components: {
                        Heading,
                        Card,
                        Stat,
                        Image,
                        Columns,
                    },
                })}
            </article>
        </main>
    );
};

export default MyRenderedPage;