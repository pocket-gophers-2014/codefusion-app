<ul>
  <li>
    <label {{action "toggleIsCollapsed"}}>{{title}}</label>
    {{#unless isCollapsed}}
      {{#each children itemController="child"}}
        {{partial "node"}}
      {{/each}}
    {{/unless}}
  </li>
</ul>