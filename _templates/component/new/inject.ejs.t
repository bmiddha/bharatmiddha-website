---
inject: true
to: src/components/index.ts
skip_if: components/<%= Name %>
append: true
---
export { default as <%= Name %> } from "./<%= Name %>/<%= Name %>";