---
to: src/components/<%= Name %>/<%= Name %>.tsx
---
import React from "react";

export type <%= Name %>Props = Record<string, never>;

export const <%= Name %>: React.FC<<%= Name %>Props> = ({ children }) => (
  <div className="<%= h.changeCase.paramCase(name) %>">{children}</div>
);

export default <%= Name %>;
