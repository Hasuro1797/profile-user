import React, { Fragment } from "react";

export default function TitleComponent({ title }: { title: string }) {
  return (
    <Fragment>
      <h2 className="text-4xl font-semibold mb-7 text-violet-600">{title}</h2>
    </Fragment>
  );
}
